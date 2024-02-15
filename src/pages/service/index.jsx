import './style.css';
import NavbarComp from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/index.jsx';
import AOS from "aos";
import { useEffect } from 'react';
import CounterSec from "../../sections/Counter.jsx";
import ServiceSec from "../../sections/Services.jsx";
import card1 from "../../assets/Service/img-service-02.jpg";
import card2 from "../../assets/Service/img-service-03.jpg";
import IconBug from "../../assets/Service/icon-bug.png";
import Triangle from "../../assets/Service/img-backup.png";
import Img04 from "../../assets/Service/img-service-04.jpg";
import Img05 from "../../assets/Service/img-service-05.jpg";
import { TypeAnimation } from 'react-type-animation';

const ServicePage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div>
                <NavbarComp />
                    <div className='service-page-img-div'>
                        <Container>
                            <TypeAnimation
                                sequence={[
                                    'Services',
                                ]}
                                wrapper="h1"
                                speed={10}
                                repeat={0}
                                className='service-page-main-hd'
                                cursor={false}
                            />
                        </Container>
                        <div className='shape-svg-container'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                                <path className="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="#FFFFFF"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <ServiceSec />
                <Container>
                    <div className='service-page-card-div'>
                        <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                            <div className='service-page-card-img-div'>
                                <div className='service-page-card-icon-div'>
                                    <img src={IconBug} width={100} alt="" />
                                </div>
                                <img src={card1} alt="card-img" className='service-page-card-img' />
                            </div>
                            <div className='service-page-card-text-div mt-100px'>
                                <h1 className='mb-3'>Data Support & Maintenance</h1>
                                <p data-aos="zoom-in-up">
                                    Our experienced maintenance and support team help you for technical
                                    issues of big data services that enable your entire system to run smoothly
                                    & reliably. We at TEALS provide a wide range of Big data managed and support
                                    services including backup, 24x7 support, archival support, admin, configuration,
                                    policy management, security, and preventive maintenance.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                            <div className='service-page-card-text-div'>
                                <h1 className='mb-3'>We Can Backup Your Data.</h1>
                                <h2>Business analysis process mapping through architecture desegn and data.</h2>
                                <p data-aos="zoom-in-up">
                                    Our experts are equipped with the latest technologies and follow
                                    industry best practices to handle your data in the most competent
                                    way, ranging from backup to data recovery and destruction. We help
                                    resolve all the possible data conflicts along with a unique maintenance
                                    proposition.
                                </p>
                            </div>
                            <div className='service-page-card-img-div'>
                                <div className='service-page-card-icon-div-2'>
                                    <img src={Triangle} width={200} alt="" />
                                </div>
                                <img src={card2} alt="card-img" className='service-page-card-img' />
                            </div>
                        </div>
                        <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                            <div className='service-page-card-img-div d-flex'>
                                <div className='img-div-service'>
                                    <img src={Img04} className='img-service' alt="img-2" />
                                </div>
                                <div className='img-div-service'>
                                    <img src={Img05} className='img-service' alt="img-1" />
                                </div>
                            </div>
                            <div className='service-page-card-text-div'>
                                <h1 className='mb-3'>Concept Prototype</h1>
                                <p data-aos="zoom-in-up">
                                    Whether you would like to test a design before progressing,
                                    push your product into development, require a working prototype
                                    for crowdfunding or are ready to share your invention idea with
                                    potential investors, prototyping an invention idea can often make a
                                    considerable difference to your project; allowing you to refine your
                                    idea whilst giving you a competitive edge.
                                </p>
                            </div>
                        </div>
                        <div className="counter-div-service-page">
                            <CounterSec />
                        </div>
                    </div>
                </Container>
            <Footer />
        </>
    )
}

export default ServicePage;