import React, { useState } from "react";
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
  LineOutlined,
  LinkedinOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import DonateModal from "../donateModal/donateModal";

const { Footer } = Layout;
const { Text, Title } = Typography;

const CustomFooter = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);


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
  const whatsappNumber = "+923291144504"; 

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
            <Text onClick={showModal} style={{ color: "#f3c647", fontSize: "1.05em", cursor:"pointer"}}>
                {"Donate"}
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
            <MailOutlined style={{color:"red"}}/>
            <a
              href="#"
              onClick={handleEmailClick}
              style={{ color: "red", marginLeft: "8px", cursor: "pointer" }}
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
            <PhoneOutlined style={{color:"green"}}/>
            <a
              href="tel:+923291144504"
              style={{ color: "green", marginLeft: "8px" }}
            >
              +92 329 11 44 504
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
            <a
              href="https://www.instagram.com/raah_e_karam?igsh=MTA3dnVpNzIyZHMzeA=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E4405F" }}

            >
              <InstagramOutlined style={{ fontSize: "1.8em" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/raah-e-karam-welfare-organization-0a2938336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0a66c2" }}

            >
              <LinkedinOutlined style={{ fontSize: "1.8em" }} />
            </a>
            <a
              href="https://www.tiktok.com/@raah.e.karam?_r=1&_d=eh92hg9342dmie&sec_uid=MS4wLjABAAAAJ9tqfE4Vrjn4RTaj_xld-EpYeiA3Ka6_514sETP-X-IWwvEDkdXgelr324_gzedS&share_author_id=7388252094958863366&sharer_language=en&source=h5_m&u_code=ef33mgli98dlcj&timestamp=1733002983&user_id=7388252094958863366&sec_user_id=MS4wLjABAAAAJ9tqfE4Vrjn4RTaj_xld-EpYeiA3Ka6_514sETP-X-IWwvEDkdXgelr324_gzedS&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7443023479878403847&share_link_id=55e2c0a0-5e2e-4cb0-a3f1-85e1b9031ca2&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#EE1D52" }} 

            >
              <TikTokOutlined style={{ fontSize: "1.8em" }} />
            </a>
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

      <DonateModal isModalVisible={isModalVisible} handleCancel={hideModal}/>
    </Footer>
  );
};

export default CustomFooter;
