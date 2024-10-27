// ContactUs.js
import React, { useState } from 'react';
import { Row, Col, Input, Button, Form } from 'antd';
import { FacebookFilled, MailFilled, WhatsAppOutlined } from '@ant-design/icons';
import './contactUs.css';
import { usePageTitle } from '../pageTitle/pageTitle';

const { TextArea } = Input;

// List of contact details with Ant Design icons
const contactDetails = [
    {
        name: 'WhatsApp',
        link: 'https://wa.me/923071632603',
        description: '+92 307 1632603',
        icon: <WhatsAppOutlined style={{ fontSize: '36px', color: '#25D366' }} />,
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=61560861104801',
        description: 'Raah e Karam',
        icon: <FacebookFilled style={{ fontSize: '36px', color: '#4267B2' }} />,
    },
    {
        name: 'Email',
        link: 'mailto:raahkeram@gmail.com',
        description: 'raahkeram@gmail.com',
        icon: <MailFilled style={{ fontSize: '36px', color: '#D44638' }} />,
    },
];

const ContactUs = () => {
    usePageTitle("Contact - Raah e Karam");

    const [form] = Form.useForm();

    // Function to handle form submission
    const handleWhatsAppSubmit = (values) => {
        const { name, phone, message } = values;
        const ourWhatsAppNumber = '923071632603'; // Your WhatsApp number
        const text = `Hello, my name is ${name}.${<br/>}
         My phone number is ${phone}.${<br/>}
         Message: ${<br/>}
         ${message}`;

        // Construct the WhatsApp URL with pre-filled message
        const whatsappURL = `https://wa.me/${ourWhatsAppNumber}?text=${encodeURIComponent(text)}`;

        // Redirect to WhatsApp with the composed message
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            
            {/* Contact Cards */}
            <Row gutter={[24, 24]} justify="center">
                {contactDetails.map((contact, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                        <a href={contact.link} target="_blank" rel="noopener noreferrer">
                            <div className="contact-card">
                                <div className="contact-header">
                                    <div className="contact-icon">
                                        {contact.icon}
                                    </div>
                                    <div className="contact-name">{contact.name}</div>
                                </div>
                                <div className="contact-description">
                                    {contact.description.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </Col>
                ))}
            </Row>

            {/* WhatsApp Contact Form */}
            <div className="contact-form glassmorphism">
                <h2>Send Us a Message<br/> on WhatsApp</h2>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleWhatsAppSubmit}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input placeholder="Your Name" className="input-field" />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                        <Input placeholder="Your Phone Number" className="input-field" />
                    </Form.Item>
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: 'Please enter your message' }]}
                    >
                        <TextArea rows={4} placeholder="Your Message" className="input-field" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="submit-button">Send on WhatsApp</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ContactUs;
