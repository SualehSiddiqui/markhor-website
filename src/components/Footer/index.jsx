import "./style.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const pages = [
  {
    name: "Contact Us",
    link: "/ContactUs",
  },
  {
    name: "About Us",
    link: "/AboutUs",
  },
  {
    name: "Careers",
    link: "/Careers",
  },
  {
    name: "Services",
    link: "/Services",
  },
  {
    name: "Terms & Conditons",
    link: "/TermsAndConditons",
  },
  {
    name: "Privacy & Policy",
    link: "/PrivacyAndPolicy",
  },
  {
    name: "Refund Policy",
    link: "/RefundPolicy",
  },
]

export default function Footer() {
  const [footerEmail, setFooterEmail] = useState("");

  const handleFooterSubmit = (e) => {
    e.preventDefault()
    console.log(footerEmail)
  }

  return (
    <div className="main-footer mt-auto">
      <div className="upper-footer">
        <Container className="footer-container">
          <div className="sub-footer">
            <div className="logo-div">
              <h1>Markhor</h1>
            </div>
            <div className="text-div">
              <div className="d-flex">
                <p>
                  <FaPhoneAlt className="location-icon" />
                </p>
                <p>
                  +92318-0705689
                </p>
              </div>
              <div className="d-flex">
                <p>
                  <IoLocationOutline className="location-icon" />
                </p>
                <p>
                  A455, Block 18 Gulistan, Karachi, Sindh
                </p>
              </div>
            </div>
          </div>
          <div className="sub-footer quick-links-div">
            <div className="logo-div">
              <h1>Quick Links</h1>
            </div>
            <div className="text-div footer-link-div">
              <ul>
                {
                  pages.map((v, i) => {
                    return (
                      <li key={i}>
                        <Link to={v.link} className="footer-links">
                          {v.name}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="d-flex">
                <div className="footer-icons-div mt-1 me-2">
                  <FaFacebookF />
                </div>
                <div className="footer-icons-div mt-1 me-2">
                  <FaInstagram />
                </div>
                <div className="footer-icons-div mt-1 me-2">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer">
            <div className="logo-div">
              <h1>Latest News</h1>
            </div>
            <div className="text-div footer-link-div">
              <Form onSubmit={handleFooterSubmit}>
                <Form.Group>
                  <Form.Control
                    className="contact-input footer-input"
                    type="email"
                    placeholder="Enter email"
                    onChange={e => {
                      setFooterEmail(e.target.value)
                    }}
                  />
                </Form.Group>
                <Button variant="primary" className="contact-submit" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
      <div className="lower-footer">
        <span>Copyright © 2023 Markhor Solution | All Rights Reserved.</span>
      </div>
    </div>
  );
}