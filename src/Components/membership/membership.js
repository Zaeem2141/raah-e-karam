import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, DatePicker, message } from 'antd';
import { UserOutlined, IdcardOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './membership.css';
import join from "../../images/j.png"

export const JoinUsForm = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(1);

  const onFinish = (values) => {
    // Check which step is currently active and combine values accordingly
    const data = {
        name: values.name || form.getFieldValue('name'), // For step 1
        fathersName: values.fathersName || form.getFieldValue('fathersName'), // For step 1
        phoneNumber: values.phoneNumber || form.getFieldValue('phoneNumber'), // For step 1
        bloodGroup: values.bloodGroup || form.getFieldValue('bloodGroup'), // For step 1
        address: values.address || form.getFieldValue('address'), // For step 1
        currentInstitute: values.currentInstitute, // For step 2
        dateOfJoining: values.dateOfJoining, // For step 2
        cnic: values.cnic, // For step 2
        email: values.email, // For step 2
        referralName: values.referralName, // For step 2
        skills: values.skills // For step 2
    };

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzPx4-6i9SC9UJh1Kje0-vNtx4deS_O3hiPXKiSH46gR_NqBFIGJFE5-pgGLf_srfrr/exec'; // Your Google Apps Script URL

    fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then((result) => {
        if (result.status === 'success') {
            message.success('Form Submitted Successfully!');
        } else {
            message.error('Failed to submit the form.');
        }
    })
    .catch((error) => {
        console.error('Error submitting form:', error);
        message.error('An error occurred while submitting the form: ' + error.message);
    });
};



  const nextStep = () => {
    setCurrentStep(2);
  };

  const previousStep = () => {
    setCurrentStep(1);
  };

  const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;

  return (
    <div className="join-us-container">
      <div className="image-section">
        <img src={join} alt="Join Our Team" className="join-us-image" />
      </div>
      <div className="form-section">
        <div className="bubble-form">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            className="join-us-form"
          >
            {currentStep === 1 && (
              <>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Enter your name" className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="fatherName"
                  label="Father's Name"
                  rules={[{ required: true, message: "Please input your father's name!" }]}
                >
                  <Input placeholder="Enter father's name" className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[
                    { required: true, message: 'Please input your phone number!' },
                    { pattern: /^\d{11}$/, message: 'Phone number must be 11 digits.' },
                  ]}
                >
                  <Input prefix={<PhoneOutlined />} placeholder="Enter phone number" className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="bloodGroup"
                  label="Blood Group"
                  rules={[{ required: true, message: 'Please input your blood group!' }]}
                >
                  <Input placeholder="Enter blood group" className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: true, message: 'Please input your address!' }]}
                >
                  <Input placeholder="Enter your address" className="styled-input" />
                </Form.Item>

                <Button type="primary" onClick={nextStep} className="next-btn">
                  Next
                </Button>
              </>
            )}

            {currentStep === 2 && (
              <>
                <Form.Item
                  name="currentInstitute"
                  label="Current Institute"
                  rules={[{ required: true, message: 'Please input your current institute!' }]}
                >
                  <Input placeholder="Enter your current institute" className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="dateOfJoining"
                  label="Date of Joining"
                  rules={[{ required: true, message: 'Please select the date of joining!' }]}
                >
                  <DatePicker style={{ width: '100%' }} className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="cnic"
                  label="CNIC"
                  rules={[
                    { required: true, message: 'Please input your CNIC!' },
                    { pattern: cnicRegex, message: 'Invalid CNIC format!' },
                  ]}
                >
                  <Input prefix={<IdcardOutlined />} placeholder="Enter CNIC (xxxxx-xxxxxxx-x)" className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="Enter your email" className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="referralName"
                  label="Referral Name"
                  rules={[{ required: true, message: 'Please input the referral name!' }]}
                >
                  <Input placeholder="Enter the referral name" className="styled-input" />
                </Form.Item>

                <Form.Item
                  name="skills"
                  label="Are you skilled in any of the below?"
                  rules={[{ required: true, message: 'Please select at least one skill!' }]}
                >
                  <Checkbox.Group>
                    <Checkbox value="Graphic Designing">Graphic Designing</Checkbox>
                    <Checkbox value="Social Media">Social Media</Checkbox>
                    <Checkbox value="Motivational Speaker">Motivational Speaker</Checkbox>
                    <Checkbox value="Content Writer">Content Writer</Checkbox>
                    <Checkbox value="Public Figure">Public Figure</Checkbox>
                    <Checkbox value="Data Entry">Data Entry</Checkbox>
                    <Checkbox value="Field Work">Field Work</Checkbox>
                    <Checkbox value="Other">Other</Checkbox>
                  </Checkbox.Group>
                </Form.Item>

                <div className="btn-group">
                  <Button onClick={previousStep} className="back-btn">Back</Button>
                  <Button type="primary" htmlType="submit" className="submit-btn">Submit</Button>
                </div>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};


