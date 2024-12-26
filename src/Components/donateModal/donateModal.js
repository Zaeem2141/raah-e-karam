import React from "react";
import { Modal, Card, Button, message, Typography, Tooltip } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import "./donateModal.css";
import easyPaisaImage from "../../images/easyPaiaLogo.png";
import nayaPayImage from "../../images/nayapayLogo.png";
import hblLogo from "../../images/hblLogo.png"

const DonateModal = ({ isModalVisible, handleCancel }) => {
  const paymentOptions = [
    {
      name: "EasyPaisa",
      imageSrc: easyPaisaImage,
      accountNumber: "03071632603",
      tooltip: "Qaisra Parveen"
    },
    {
      name: "NayaPay",
      imageSrc: nayaPayImage,
      accountNumber: "03491174754",
      tooltip: "Noman Nawaz"
    },
    {
      name: "HBL Account",
      imageSrc: hblLogo,
      accountNumber: "25647000237399",
      tooltip: "Zaeem Alam"
    },
  ];

  const copyToClipboard = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => message.success("Account number copied!"))
        .catch(() => message.error("Failed to copy"));
    } else {
      // Fallback method for older mobile devices
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      message.success("Account number copied!");
    }
  };

  return (
    <Modal
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      closeIcon={<span className="cross">X</span>}
      className="glass-modal"
    >
      <h3 className="title">Donate Now via the Following Accounts</h3>
      <p className="donate-description">
        Your generous donations make a difference! Choose your preferred payment method below and help us make an impact.
      </p>
      <div className="payment-options">
        {paymentOptions.map((option, index) => (

          <Tooltip title={`Account Name : ${option?.tooltip}`}>
          <div key={index} className="payment-option">
            
              <img
                src={option.imageSrc}
                alt={`${option.name} logo`}
                className="option-image"
              />
            
            <div className="option-text-wrapper">
              <Typography.Text  className="option-name">{option.name}</Typography.Text >
              <Typography.Text className="account-number">
                {option.accountNumber} &nbsp;
                <Tooltip title={"Copy Account number"}>
                <Button
                  type="text"
                  icon={<CopyOutlined />}
                  onClick={() => copyToClipboard(option.accountNumber)}
                  className="copy-icon"
                /></Tooltip>
              </Typography.Text >
            </div>
          </div>
          </Tooltip>
        ))}
      </div>
    </Modal>
  );
};

export default DonateModal;
