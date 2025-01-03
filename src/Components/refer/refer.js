import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./refer.css"
import { usePageTitle } from "../pageTitle/pageTitle";

const { Option } = Select;

export const Refer = () => {

    usePageTitle("Refer Needy - Raah e Karam");
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    const { name, phone, address, domain, reason } = values;
    const ourWhatsAppNumber = "923291144504";
    const message = `
    🔔 *You have a new Case Referred from the RAAH e KARAM website!*
    
    👨‍👩‍👧‍👦 **Family Details:**

    - *Name of Family:* ${name}
    - *Phone of Family:* ${phone}
    - *Address of Family:* ${address}
    
    🌟 *Requested Assistance:*

    - *Required Domain:* ${domain}
    
    📝 *Suggestor's Views:*
    ${reason}
    
    📌 *Source:* Website
    `;
    

    // Construct the WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${ourWhatsAppNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp with the composed message
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className="refer-container">
      <h1>Refer a Family</h1>
      <h3 className="sub-heading">
        Enter the details of the family who needs our help in any of our domain.
        After Refer Our Team will do a complete verification to accept the
        reference or do the rejection on the basis of their Conditions and
        needs.
      </h3>

      <div className="refer-form">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Name of Family"
            name="name"
            rules={[{ required: true, message: "Please enter the Name" }]}
          >
            <Input placeholder="Family Name" className="i-field" />
          </Form.Item>
          <Form.Item
            label="Phone Number of Family"
            name="phone"
            rules={[
              { required: true, message: "Please enter the phone number" },
            ]}
          >
            <Input placeholder="Family Phone Number" className="i-field" />
          </Form.Item>
          <Form.Item
            label="Address of Family"
            name="address"
            rules={[{ required: true, message: "Please enter the Address" }]}
          >
            <Input placeholder="Family Address" className="i-field" />
          </Form.Item>
          <Form.Item
            label="Domain"
            name="domain"
            rules={[{ required: true, message: "Please select the domain" }]}
          >
            <Select placeholder="Select the Domain" className="d-field">
              <Option value="rashan">Rashan</Option>
              <Option value="schoolFee">School Fee</Option>
              <Option value="roozgar">Roogzar</Option>
              <Option value="medicine">Medicine</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Why need Help"
            name="reason"
            rules={[{ required: true, message: "Please enter the Reason" }]}
          >
            <TextArea
              rows={4}
              placeholder="please enter your view about the Family"
              className="i-field"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="s-button">
              Refer the Case
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
