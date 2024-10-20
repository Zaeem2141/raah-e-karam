import React, { useEffect, useState } from "react";
import { Card, Col, Row, Statistic } from "antd";
import { Line } from "@ant-design/charts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

import "./stats.css";

export const Statistics = () => {
  const currentYear = new Date().getFullYear();

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
        const monthsColRef = collection(db, "Statistics");
        const monthsSnapshot = await getDocs(monthsColRef);

        let totalFamilies = 0;
        let totalMembers = 0;
        let chartData = [];

        monthsSnapshot.forEach((doc) => {
          const { families, members } = doc.data();
          chartData.push({
            month: doc.id,
            families,
            members,
          });
          totalFamilies = families > totalFamilies ? families : totalFamilies;
          totalMembers = members > totalMembers ? members : totalMembers;
        });

        setData((prevState) => ({
          ...prevState,
          families: totalFamilies,
          members: totalMembers,
          chartData,
        }));
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchStatistics();
  }, []);
  // Calculate dynamic max value for Y-axis
  const maxFamilies = Math.max(...data.chartData.map((d) => d.families), 0) || 10;
  
  const config = {
    data: data.months.map((month) => {
      const monthData = data.chartData.find((item) => item.month === month.toLowerCase());
      return monthData
        ? {
            ...monthData,
            families: monthData.families || 0,
            members: monthData.members || 0,
          }
        : { month, families: 0, members: 0 };
    }),
    xField: "month",
    yField: "families",
    point: {
      size: 5,
      shape: "circle",
    },
    interaction: {
      tooltip: {
        marker: true,
      },
    },
    smooth: true,
    height: 300,
    color: ["#f3c647"],
    lineStyle: { stroke: "#f3c647" },
    responsive: true,
  };

  return (
    <div className="statistics-container">
      <h2 className="statistics-heading">Our Statistics - {currentYear}</h2>
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
