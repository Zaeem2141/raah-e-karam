import React from "react";
import logo from "../../images/logo2.png";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Footer } = Layout;
const { Text, Title } = Typography;

const CustomFooter = () => {
  const handleEmailClick = (event) => {
    event.preventDefault();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "mailto:raahekaram@gmail.com";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=raahekaram@gmail.com",
        "_blank",
        "noopener noreferrer"
      );
    }
  };
  const whatsappNumber = "+923071632603"; // WhatsApp number in international format without the "+" symbol

  return (
    <Footer
      style={{ backgroundColor: "#000", color: "#FFF", padding: "20px 20px" }}
    >
      <Row gutter={[32, 32]} justify="center" align="middle">
        {/* Logo and Description Section */}
        <Col xs={24} sm={12} lg={8}>
          <Space direction="vertical" size="small">
            <img
              src={logo}
              alt="Raah e Karam Logo"
              style={{ width: "100px", marginBottom: "10px" }}
            />
            <Text
              style={{
                fontSize: "1.1em",
                color: "#FFF",
                lineHeight: "1.5",
                maxWidth: "300px",
              }}
            >
              Raah e Karam is a student-led non-profit organization committed to
              providing aid in education, ration, medical support, and
              employment to those in need. Join us in making a difference.
            </Text>
          </Space>
        </Col>

        {/* Quick Links Section */}
        <Col xs={24} sm={12} lg={8}>
          <Title level={4} style={{ color: "white", marginBottom: "15px" }}>
            Quick Links
          </Title>
          <Space direction="vertical" size="small">
            <Text>
              <a href="/about" style={{ color: "#f3c647", fontSize: "1.05em" }}>
                About Us
              </a>
            </Text>
            <Text>
              <Link
                style={{ color: "#f3c647", fontSize: "1.05em" }}
                to="/referAFamily"
              >
                Refer a Needy
              </Link>
            </Text>
            <Text>
              <a
                href="/joinUs"
                style={{ color: "#f3c647", fontSize: "1.05em" }}
              >
                Join Us
              </a>
            </Text>
            <Text>
              <a href="/" style={{ color: "#f3c647", fontSize: "1.05em" }}>
                Donate
              </a>
            </Text>
            <Text>
              <a
                href="/contactUs"
                style={{ color: "#f3c647", fontSize: "1.05em" }}
              >
                Contact Us
              </a>
            </Text>
          </Space>
        </Col>

        {/* Contact & Social Media Section */}
        <Col xs={24} sm={12} lg={8}>
          <Title level={4} style={{ color: "white", marginBottom: "15px" }}>
            Connect with Us
          </Title>
          <Text
            style={{
              color: "#FFF",
              fontSize: "1.05em",
              display: "block",
              marginBottom: "10px",
            }}
          >
            <MailOutlined />
            <a
              href="#"
              onClick={handleEmailClick}
              style={{ color: "#f3c647", marginLeft: "8px", cursor: "pointer" }}
            >
              raahekaram@gmail.com
            </a>
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontSize: "1.05em",
              display: "block",
              marginBottom: "10px",
            }}
          >
            <PhoneOutlined />
            <a
              href="tel:+923071632603"
              style={{ color: "#FFD700", marginLeft: "8px" }}
            >
              +92 307 1632603
            </a>
          </Text>
          <Space size="large" style={{ marginTop: "15px" }}>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25D366" }}
            >
              <WhatsAppOutlined style={{ fontSize: "1.8em" }} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61560861104801"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3b5998" }}
            >
              <FacebookOutlined style={{ fontSize: "1.8em" }} />
            </a>
            {/*<a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E1306C" }}
            >
              <InstagramOutlined style={{ fontSize: "1.8em" }} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1DA1F2" }}
            >
              <TwitterOutlined style={{ fontSize: "1.8em" }} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF0000" }}
            >
              <YoutubeOutlined style={{ fontSize: "1.8em" }} />
            </a>*/}
          </Space>
        </Col>
      </Row>

      <Divider style={{ backgroundColor: "#FFF", margin: "10px 0" }} />

      {/* Copyright */}
      <Row justify="center">
        <Col>
          <Text style={{ color: "#FFF", fontSize: "1em" }}>
            © {new Date().getFullYear()} Raah e Karam. All rights reserved.
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
