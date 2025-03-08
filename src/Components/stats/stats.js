import React, { useEffect, useState } from "react";
import { Card, Col, Row, Statistic, Select } from "antd";
import { Line } from "@ant-design/charts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

import "./stats.css";

export const Statistics = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear >= 2024 ? currentYear : 2024);
  const [data, setData] = useState({
    families: 0,
    members: 0,
    chartData: [],
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        // Fetch all documents from "Statistics"
        const monthsColRef = collection(db, "Statistics");
        const monthsSnapshot = await getDocs(monthsColRef);

        let chartData = [];
        let maxFamilies = 0;
        let maxMembers = 0;

        monthsSnapshot.forEach((doc) => {
          const docId = doc.id; // Example: "Jan-2024"
          const { families, members } = doc.data();

          // Extract year from document ID (assuming format "Jan-2024")
          const docYear = parseInt(docId.split("-")[1]); 

          if (docYear === selectedYear) {
            const month = docId.split("-")[0]; // Extract "Jan", "Feb", etc.

            chartData.push({ month, families, members });

            // Find max values instead of summing
            maxFamilies = Math.max(maxFamilies, families);
            maxMembers = Math.max(maxMembers, members);
          }
        });

        setData({
          families: maxFamilies,
          members: maxMembers,
          chartData,
          months: data.months, // Keep months array unchanged
        });
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchStatistics();
  }, [selectedYear]);

  // Generate years from 2024 onwards
  const yearOptions = Array.from({ length: currentYear - 2024 + 1 }, (_, i) => 2024 + i);

  const config = {
    data: data.months.map((month) => {
      const monthData = data.chartData.find((item) => item.month.toLowerCase() === month.toLowerCase());
      return monthData
        ? { ...monthData, families: monthData.families || 0, members: monthData.members || 0 }
        : { month, families: 0, members: 0 };
    }),
    xField: "month",
    yField: "families",
    point: { size: 5, shape: "circle" },
    interaction: { tooltip: { marker: true } },
    smooth: true,
    height: 300,
    color: ["#f3c647"],
    lineStyle: { stroke: "#f3c647" },
    responsive: true,
  };

  return (
    <div className="statistics-container">
      <h2 className="statistics-heading">Statistics for {selectedYear}</h2>

      {/* Year Selector */}
      <div className="select-button">
        <span>Select Year:</span>
        <Select
          value={selectedYear}
          onChange={setSelectedYear}
          style={{ width: 120, marginLeft: 10 }}
        >
          {yearOptions.map((year) => (
            <Select.Option key={year} value={year}>
              {year}
            </Select.Option>
          ))}
        </Select>
      </div>

      <Row gutter={24} align="middle">
        <Col xs={24} md={8}>
          <Card hoverable className="statistics-card">
            <Statistic
              title={<div className="statistics-title">Families Helped</div>}
              value={data.families}
              suffix={<span className="statistics-suffix">+</span>}
              className="statistics-value"
            />
          </Card>

          <Card hoverable className="statistics-card">
            <Statistic
              title={<div className="statistics-title">Team Members</div>}
              value={data.members}
              suffix={<span className="statistics-suffix">+</span>}
              className="statistics-value"
            />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card hoverable className="chart-container">
            <div className="chart-background">
              <Line {...config} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
