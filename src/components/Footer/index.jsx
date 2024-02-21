import "./style.css";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { MdDoubleArrow } from "react-icons/md";
import FooterLogo from "../../assets/Footer/footer-logo.png";
import { FiTwitter } from "react-icons/fi";


const pages = [
  {
    name: "Home",
    link: "/",
  },
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
    link: "/Career",
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

const services = [
  {
    name: "Social Media Marketing",
    link: "/SocialMediaMarketing"
  },
  {
    name: "Web Developement",
    link: "/WebDevelopement"
  },
  {
    name: "Digital Marketing",
    link: "/DigitalMarketing"
  },
  {
    name: "Ui/Ux Designing",
    link: "/UiDesigning"
  },
  {
    name: "Motion Graphics",
    link: "/MotionGraphics"
  }
]

export default function Footer() {
  const [footerEmail, setFooterEmail] = useState("");
  const location = useLocation();
  console.log(location.pathname)

  const handleFooterSubmit = (e) => {
    e.preventDefault()
    console.log(footerEmail)
  }

  return (
    <div className="main-footer me-auto">
      <div className="upper-footer">
        <Container className="footer-container">
          <div className="sub-footer">
            <div className="logo-div">
              <img src={FooterLogo} alt="Footer-Logo_Markhor" className="footer-logo" />
            </div>
            <div className="text-div">
              <div className="d-flex">
                <p>
                  <FaPhoneAlt className="location-icon me-1" />
                </p>
                <p>
                  <Link to={'tel:++923183253219'} className="text-div-link">
                    +92 318 3253219
                  </Link>
                </p>
              </div>
              <div className="d-flex">
                <p>
                  <IoLocationOutline className="location-icon me-1" />
                </p>
                <p>
                  Fedreal. B Area, BLock#14, Karachi, Sindh
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
                        <Link to={v.link} className={`footer-links ${v.link === location.pathname ? 'footer-active-link' : ''}`}>
                          <MdDoubleArrow className="footer-list-icons" />
                          {v.name}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
              <div className="d-flex">
                <Link to={'https://www.facebook.com/profile.php?id=61553390727588&mibextid=ZbWKwL'} target="_blank">
                  <div className="footer-icons-div mt-1 me-2">
                    <FaFacebookF />
                  </div>
                </Link>
                <Link to={'https://www.instagram.com/markhorsolution.co?igsh=MTZ6Z2hucm15dHozMg=='} target="_blank">
                  <div className="footer-icons-div mt-1 me-2">
                    <FaInstagram />
                  </div>
                </Link>
                {/* <div className="footer-icons-div mt-1 me-2">
                  <FaLinkedin />
                </div>
                <div className="footer-icons-div mt-1 me-2">
                  <FiTwitter />
                </div> */}
              </div>
            </div>
          </div>
          <div className="sub-footer">
            <div className="logo-div">
              <h1>Latest News</h1>
            </div>
            <div className="text-div ">
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
          <div className="sub-footer quick-links-div">
            <div className="logo-div">
              <h1>Services</h1>
            </div>
            <div className="text-div footer-link-div">
              <ul>
                {
                  services.map((v, i) => {
                    return (
                      <li key={i}>
                        <Link to={v.link} className={`footer-links ${v.link === location.pathname ? 'footer-active-link' : ''}`}>
                          <MdDoubleArrow className="footer-list-icons" />
                          {v.name}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </Container>
      </div >
      <div className="lower-footer">
        <span>Copyright © 2023 Markhor Solution | All Rights Reserved.</span>
      </div>
    </div >
  );
}