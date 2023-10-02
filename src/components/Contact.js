import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            console.log("Form data submitted:", formData);
            setShowAlert(true);
        }
    };

    return (
        <Container className="mt-5">
            <h2>Contact Me</h2>

            <div className="contact-info mb-5">
                <p><a href="mailto:maxlamthach10@gmail.com">maxlamthach10@gmail.com</a></p>
                <p>If you'd like to reach out, you can contact me at the email above. Or use the contact form below.</p>
            </div>

            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Message sent successfully!
                </Alert>
            )}

            {/* Contact Form */}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Contact;
