import './style.css';
import NavbarComp from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/index.jsx'
import Flag from '../../assets/ContactUs/flag.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AOS from "aos";
import { useState, useEffect } from 'react';

const ContactUsPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [resume, setResume] = useState("");

    useEffect(() => {
        AOS.init();
    }, [])

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
        <div>
            <NavbarComp />
            <div className="main-service mid-section-1">
                <div className='mid-section'>
                    <Container >
                        <div className='page-name-div'>
                            <h1>Contact Us</h1>
                            <h1 className='mt-5'>If You Need Any Help! Contact With Us.</h1>
                        </div>
                    </Container>
                </div>
            </div>
            <div className='mid-section-2'>
                <Container >
                    <div className='address-div flag-div-main'>
                        <div className='sub-address-div'>
                            <div className='flag-div'><img src={Flag} alt="flag" className='flag-image' /></div>
                            <div className='country-div'>
                                <h2>Pakistan</h2>
                                <p>
                                    +92 336 3869414
                                    <br />
                                    Karachi, Pakistan
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className='address-div flag-div-responsive'>
                <div className='sub-address-div'>
                    <div className='flag-div'><img src={Flag} alt="flag" className='flag-image' /></div>
                    <div className='country-div'>
                        <h2>Pakistan</h2>
                        <p>
                            +92 336 3869414
                            <br />
                            Karachi, Pakistan
                        </p>
                    </div>
                </div>
            </div>
            <div className="background-img-div" style={{ margin: 0 }}></div>
            <div className="main-service main-contact" style={{ margin: 0 }}>
                <Container className="service-container" data-aos-duration="700" data-aos="zoom-in-up">
                    <h4 className="procedure-hd">Let's Connect</h4>
                    <h1 className="main-contact-hd">Leave Us Your Details And We’ll Get Back To You</h1>
                    <Form className="form-div" onSubmit={handleSubmit}>
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
            <Footer />
        </div>
    )
}

export default ContactUsPage;