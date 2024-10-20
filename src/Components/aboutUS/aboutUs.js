import { Card, Row, Col } from 'antd';
import { usePageTitle } from '../pageTitle/pageTitle';
import './aboutUs.css'; // Custom styling for responsiveness
import Fee from "../../images/education.avif"
import food from "../../images/food1.avif"
import medicine from "../../images/medicine.avif"
import work from "../../images/work.avif"

export const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Intro Section */}
      <section className="intro-section-with-background">
  <div className="text-card">
    <h1>Raah e Karam</h1>
    <p>
      <strong>Raah e Karam</strong> is a non-profit, student-based organization with a mission to serve humanity by
      providing essential support to those in need. Founded with the spirit of charity and selflessness, we collect
      donations from generous individuals who want to make a real difference in the lives of the underprivileged.
    </p>
    <p>
      We focus on providing <strong>ration supplies</strong> for families, <strong>fee assistance</strong> for students,
      <strong> medical aid</strong> for those who need it, and <strong>employment support</strong> to create sustainable
      livelihoods.
    </p>
    <p>
      Our approach is rooted in transparency. We ensure donors see how their contributions are used through proof like
      videos, images, and even invite them to accompany us during ration distribution.
    </p>
  </div>
</section>


      {/* Our Domains Section */}
      <section className="domains-section">
        <h2>Our Domains</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              title={<strong>Fee Assistance</strong>}
              cover={<img alt="Fee Assistance" src={Fee} />}
              className="custom-card"
            >
              <p>We support students by paying their fees, helping them continue their education without financial stress.</p>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              title={<strong>Ration Distribution</strong>}
              cover={<img alt="Ration Distribution" src={food} />}
              className="custom-card"
            >
              <p>We distribute ration to families in need, ensuring they have basic food supplies for survival.</p>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              title={<strong>Medicine Assistance</strong>}
              cover={<img alt="Medicine Assistance" src={medicine} />}
              className="custom-card"
            >
              <p>We provide medical aid and medicines to those who cannot afford healthcare and treatments.</p>
            </Card>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              title={<strong>Employment Assistance</strong>}
              cover={<img alt="Employment Assistance" src={work} />}
              className="custom-card"
            >
              <p>We help create employment opportunities for the less privileged, enabling them to earn a living with dignity.</p>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

