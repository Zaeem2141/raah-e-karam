import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, DatePicker, message, notification } from 'antd';
import { UserOutlined, IdcardOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './membership.css';
import join from "../../images/j.png";
import { db } from "../firebase/firebase";
import { addDoc, collection } from 'firebase/firestore';

export const JoinUsForm = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for disabling the form

  const onFinish = async (values) => {
    try {
      setIsSubmitting(true); // Disable the form on submission
      console.log("Final Submitted Values:", values);

      // Convert the date to a string if it's present
      const dateOfJoining = values.dateOfJoining ? values.dateOfJoining.format('YYYY-MM-DD') : null;

      // Add data to Firestore
      const docRef = await addDoc(collection(db, "submissions"), {
        name: form.getFieldValue("name") || '',
        fatherName: form.getFieldValue("fatherName") || '',
        phoneNumber: form.getFieldValue("phoneNumber") || '',
        bloodGroup: form.getFieldValue("bloodGroup") || '',
        address: form.getFieldValue("address") || '',
        currentInstitute: values.currentInstitute || '',
        dateOfJoining: dateOfJoining,
        cnic: values.cnic || '',
        email: values.email || '',
        referralName: values.referralName || '',
        skills: values.skills || [],
      });

      notification.success({ message: "Form submitted successfully!" });

      // Reset form and steps if needed
      form.resetFields();
      setCurrentStep(1);
    } catch (error) {
      notification.error({ message: "Form not submitted" });
    } finally {
      setIsSubmitting(false); // Re-enable the form after submission
    }
  };

  const nextStep = () => {
    setCurrentStep(2); // Move to the next step
  };

  const previousStep = () => {
    setCurrentStep(1); // Go back to the previous step
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
            onFinish={currentStep === 2 ? onFinish : null} // Only call onFinish on the last step
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
                  <Input prefix={<UserOutlined />} placeholder="Enter your name" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="fatherName"
                  label="Father's Name"
                  rules={[{ required: true, message: "Please input your father's name!" }]}
                >
                  <Input placeholder="Enter father's name" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[
                    { required: true, message: 'Please input your phone number!' },
                    { pattern: /^\d{11}$/, message: 'Phone number must be 11 digits.' },
                  ]}
                >
                  <Input prefix={<PhoneOutlined />} placeholder="Enter phone number" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="bloodGroup"
                  label="Blood Group"
                  rules={[{ required: true, message: 'Please input your blood group!' }]}
                >
                  <Input placeholder="Enter blood group" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="address"
                  label="Address"
                  rules={[{ required: true, message: 'Please input your address!' }]}
                >
                  <Input placeholder="Enter your address" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Button type="primary" onClick={nextStep} className="next-btn" disabled={isSubmitting}>
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
                  <Input placeholder="Enter your current institute" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="dateOfJoining"
                  label="Date of Joining"
                  rules={[{ required: true, message: 'Please select the date of joining!' }]}
                >
                  <DatePicker style={{ width: '100%' }} className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="cnic"
                  label="CNIC"
                  rules={[
                    { required: true, message: 'Please input your CNIC!' },
                    { pattern: cnicRegex, message: 'Invalid CNIC format!' },
                  ]}
                >
                  <Input prefix={<IdcardOutlined />} placeholder="Enter CNIC (xxxxx-xxxxxxx-x)" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' },
                  ]}
                >
                  <Input prefix={<MailOutlined />} placeholder="Enter your email" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="referralName"
                  label="Referral Name"
                  rules={[{ required: true, message: 'Please input the referral name!' }]}
                >
                  <Input placeholder="Enter the referral name" className="styled-input" disabled={isSubmitting} />
                </Form.Item>

                <Form.Item
                  name="skills"
                  label="Are you skilled in any of the below?"
                  rules={[{ required: true, message: 'Please select at least one skill!' }]}
                >
                  <Checkbox.Group disabled={isSubmitting}>
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
                  <Button onClick={previousStep} className="back-btn" disabled={isSubmitting}>Back</Button>
                  <Button type="primary" htmlType="submit" className="submit-btn" disabled={isSubmitting}>Submit</Button>
                </div>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};
