import "./style.css";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import SvgComponent from "../components/SvgComponent";
import Social from "../assets/Service/Cards/Social.webp";
import Graphic from "../assets/Service/Cards/Graphic.avif";
import Website from "../assets/Service/Cards/Website.avif";
import Motion from "../assets/Service/Cards/Motion.avif";
import EBook from "../assets/Service/Cards/EBook.avif";
import Digital from "../assets/Service/Cards/Digital.avif";

const ServiceSec = () => {
    return (
        <div className="main-service main-service-div">
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
                                    <img src={Website} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Web Develpement</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-down-right" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/DigitalMarketing'} className="service-link">
                                <div className="service-card">
                                    <img src={Digital} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Digital Marketing</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div data-aos="fade-up-left" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/UiDesigning'} className="service-link">
                                <div className="service-card">
                                    <img src={Graphic} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Ui/Ux Designing</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-up-left" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/MotionGraphics'} className="service-link">
                                <div className="service-card">
                                    <img src={Motion} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>Motion Graphics</h1>
                                </div>
                            </Link>
                        </div>
                        <div data-aos="fade-up-left" data-aos-offset="300" data-aos-duration="700">
                            <Link to={'/MobileAppDevelopement'} className="service-link">
                                <div className="service-card">
                                    <img src={EBook} alt="" className="card-img" />
                                </div>
                                <div className="sercvice-card-text-div">
                                    <h1>E Book</h1>
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