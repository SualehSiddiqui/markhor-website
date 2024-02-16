import "./style.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const ContactSec = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const useData = {
            name,
            email,
            resume
        }
        console.log(useData)
    }

    return (
        <>
            <div className="background-img-div"></div>
            <div className="main-service main-contact">
                <Container className="service-container">
                    <h4
                        className="procedure-hd"
                        data-aos="fade-right"
                        // data-aos-offset="300"
                        data-aos-duration="700"
                    >
                        Let's Connect
                    </h4>
                    <h1
                        className="main-contact-hd"
                        data-aos="fade-left"
                        // data-aos-offset="300"
                        data-aos-duration="700"
                    >
                        Leave Us Your Details And We’ll Get Back To You
                    </h1>
                    <Form className="form-div" onSubmit={handleSubmit} data-aos-duration="700" data-aos="zoom-in-up">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="contact-label">Name *</Form.Label>
                            <Form.Control
                                className="contact-input"
                                type="text"
                                placeholder="Enter your name"
                                onChange={e => {
                                    setName(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="contact-label">Email Address *</Form.Label>
                            <Form.Control
                                className="contact-input"
                                type="email"
                                placeholder="Enter email"
                                onChange={e => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label className="contact-label">Resume Upload</Form.Label>
                            <Form.Control
                                className="contact-upload"
                                type="file"
                                onChange={e => {
                                    setResume(e.target.files[0]);
                                }}
                            />
                        </Form.Group>
                        <Button variant="primary" className="contact-submit" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default ContactSec;