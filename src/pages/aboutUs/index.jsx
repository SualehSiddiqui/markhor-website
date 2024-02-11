import './style.css';
import NavbarComp from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/index.jsx';
import AOS from "aos";
import { useEffect } from 'react';
import Img01 from "../../assets/AboutUs/img1.jpg";
import Img02 from "../../assets/AboutUs/img2.jpg";
import IconCheck from "../../assets/AboutUs/icon-check.png"
import { FaRegCheckSquare } from "react-icons/fa";
import Button from 'react-bootstrap/Button';



const AboutUSPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div>
                <NavbarComp />
                <div className="main-service">
                    <div className='service-page-img-div'>
                        <Container>
                            <h2 className='service-page-main-hd'>About Us</h2>
                        </Container>
                        <div className='shape-svg-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path class="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="#FFFFFF"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-service sub-main-about">
                <Container>
                    <div className='service-page-card-div'>
                        <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                            <div className='service-page-card-img-div about-page-card-img-div d-flex'>
                                <div className='img-div-service img-div-about'>
                                    <img src={Img02} className='img-service' alt="img-2" />
                                </div>
                                <div className='img-div-service  img-div-service'>
                                    <img src={Img01} className='img-service' alt="img-1" />
                                </div>
                            </div>
                            <div className='service-page-card-text-div'>
                                <h3 className='mb-3'>About Us</h3>
                                <h1 className='mb-3'>Wo We Are</h1>
                                <p data-aos="zoom-in-up">
                                    We are individuals that do no settle in for the bare minimum.
                                    We strive for perfection, your satisfaction is our primary goal
                                    and we do work hard to attain it. We bleed digital, we are a born
                                    digital company and understand the needs of all of our clients to
                                    the fullest. We take great pride in what we do, and to see your
                                    business flourish takes us to a whole new level of creativeness.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="main-service sub-main-about-2">
                <Container className='about-details-container d-flex justify-content-center align-items-center'>
                    <div data-aos-duration="700" data-aos="zoom-in-up" className='main-detail-about main-detail-about-1'>
                        <div className='icon-div-about'>
                            <img src={IconCheck} alt="check_icon" className='about-icon mb-3' />
                            <h2>What We Do?</h2>
                        </div>
                        <div className='text-div-about'>
                            <p>
                                Our dynamic professional team of talented designers, developers, programmers
                                and marketing professionals to drive your best business forward and take you to
                                where you need to be.
                            </p>
                        </div>
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in-up" className='main-detail-about main-detail-about-2'>
                        <div className='icon-div-about '>
                            {/* <img src={IconCheck} alt="check_icon" className='about-icon mb-3' /> */}
                            <h2>Why Choose Us?</h2>
                        </div>
                        <div className='text-div-about text-div-about-2'>
                            <p>
                                Understanding the complete needs of our clients to the fullest interpreting
                                them in a digital language and achieving a complete satisfaction is what we
                                were created to do.
                            </p>
                            <p>
                                <FaRegCheckSquare className='check-icon' /> <span className='icon-txt'>24/7 Customer Support</span>
                            </p>
                            <p>
                                <FaRegCheckSquare className='check-icon' /> <span className='icon-txt'>24/7 Awesome Team Members</span>
                            </p>
                            <p>
                                <FaRegCheckSquare className='check-icon' /> <span className='icon-txt'>100% Quality Product</span>
                            </p>
                        </div>
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in-up" className='main-detail-about main-detail-about-3'>
                        <div className='icon-div-about'>
                            <img src={IconCheck} alt="check_icon" className='about-icon mb-3' />
                            <h2>Who We Help?</h2>
                        </div>
                        <div className='text-div-about'>
                            <p>
                                We instigate sustainable and measurable processes to
                                help seize today’s digital marketplace, to help grow your
                                business ROI.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="main-service sub-main-about-3">
                <Container>
                    <div className='appointment-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <div className='appointments-text-div'>
                            <h1>What’s next?</h1>
                            <p>
                                Collaboration begins with a conversation. Whether you’re interested in discussing
                                a new project or simply wish to find out more about our services and what we can
                                do for you, we are here to help. Let’s get the conversation going.
                            </p>
                        </div>
                        <div className='appointments-button-div'>
                            <div>
                                <Button variant="primary" className="contact-submit appointment-button me-4">
                                    Schedule a call with us
                                </Button>
                                <Button variant="primary" className="contact-submit appointment-button">
                                    Start a project
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default AboutUSPage;