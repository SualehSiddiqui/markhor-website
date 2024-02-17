import "./style.css";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import SvgComponent from "../components/SvgComponent";
import { TypeAnimation } from 'react-type-animation';
import Social from "../assets/Service/Cards/social.jpg";
import Brand from "../assets/Service/Cards/brand.avif";

const ServiceSec = () => {
    return (
        <div className="main-service main-service-div">
            <h4 className="procedure-hd">
                Markhor Solutions
                <TypeAnimation
                    sequence={[
                        ' - One of the Best IT Compnay in Karachi',
                        1000,
                        ' Provides Best Quality Work.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="procedure-hd"
                />
            </h4>
            <div className="main-service-hd-1">
                <h1 data-aos="fade-right" data-aos-offset="300" className="main-service-hd" data-aos-duration="700" >
                    Our Services
                </h1>
                <SvgComponent />
            </div>
            <Container className="service-container">
                <div className="service-card-div">
                    <div>
                        <div data-aos="fade-down-right" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/SocialMediaMarketing'} className="service-link">
                                <div className="service-card">
                                    <img src={Social} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Social Media Management</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-down-right" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/WebDevelopement'} className="service-link">
                                <div className="service-card">
                                    <img src={Brand} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Web Develpement</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-down-right" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/BrandIdentity'} className="service-link">
                                <div className="service-card">
                                    <img src={Brand} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Brand Identity</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-down-right" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/DigitalMarketing'} className="service-link">
                                <div className="service-card">
                                    <img src={Brand} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Digital Marketing</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div data-aos="fade-up-left" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/GraphicDesigning'} className="service-link">
                                <div className="service-card">
                                    <img src={Brand} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Graphic Designing</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-up-left" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/MotionGraphics'} className="service-link">
                                <div className="service-card">
                                    <img src={Brand} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Motion Graphics</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-up-left" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/MobileAppDevelopement'} className="service-link">
                                <div className="service-card">
                                    <img src={Brand} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Mobile App Developement</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-up-left" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/Telemarketing'} className="service-link">
                                <div className="service-card">
                                    <img src={Brand} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Tele marketing</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ServiceSec;