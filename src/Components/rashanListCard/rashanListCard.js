import React from "react";
import { Row, Col } from "antd";
import "./rashanListCard.css";

const RationListCard = () => {
  return (
    <div className="ration-list-wrapper">
      {/* Main Heading */}
      <h2 className="main-heading">Food List</h2>
      <p className="sub-heading">
        It is our duty to inform you how your charity contributions are
        utilized.
      </p>

      {/* Ration List Card */}
      <div className="ration-list-card">
        <Row className="ration-items">
          <Col span={12} className="item">
            <span>• Atta</span>
            <span>1 bag (10kg)</span>
          </Col>
          <Col span={12} className="item">
            <span>• Oil</span>
            <span>3kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Rice</span>
            <span>3kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Sugar</span>
            <span>2kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Daal Chana</span>
            <span>1/2 kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Daal Masoor</span>
            <span>1/2 kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Daal Mong</span>
            <span>1/2 kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Daal Black Masoor</span>
            <span>1/2 kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Black Chanay</span>
            <span>1/2 kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• White Chanay</span>
            <span>1/2 kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Tea</span>
            <span>Box</span>
          </Col>
          <Col span={12} className="item">
            <span>• Red Chilli</span>
            <span>12 packs</span>
          </Col>
          <Col span={12} className="item">
            <span>• Salt</span>
            <span>1kg</span>
          </Col>
          <Col span={12} className="item">
            <span>• Surf</span>
            <span>Bonus</span>
          </Col>
          <Col span={12} className="item">
            <span>• Soap</span>
            <span>2 pcs</span>
          </Col>
          <Col span={12} className="item">
            <span>• Dishwash Bar</span>
            <span>1 long bar</span>
          </Col>
        </Row>

        {/* Total Price Section */}
        <div className="total-section">
          <div className="total-price-container">
            Total amount of bag: <span className="total-price">5000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RationListCard;
