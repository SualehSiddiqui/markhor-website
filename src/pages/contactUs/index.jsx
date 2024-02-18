import './style.css';
import NavbarComp from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/index.jsx'
import Flag from '../../assets/ContactUs/flag.jpg'
import AOS from "aos";
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ContactSec from '../../sections/Contact.jsx';

const ContactUsPage = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            <NavbarComp />
            <div className='mid-section mid-section-1'>
                <div className='shape-svg-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='contact-svg' viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="#FFFFFF"></path>
                    </svg>
                </div>
                <Container >
                    <div className='page-name-div'>
                        <TypeAnimation
                            sequence={[
                                'Contact Us',
                            ]}
                            wrapper="h1"
                            speed={10}
                            repeat={0}
                            className='service-page-main-hd'
                            cursor={false}
                        />
                        <TypeAnimation
                            sequence={[
                                'If You Need Any Help! Contact With Us.',
                            ]}
                            wrapper="h1"
                            speed={10}
                            repeat={0}
                            className='service-page-main-hd mt-5'
                            cursor={false}
                        />
                    </div>
                </Container>
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
                            +92 318 3253219
                            <br />
                            Karachi, Pakistan
                        </p>
                    </div>
                </div>
            </div>
            <ContactSec />
            <Footer />
        </div>
    )
}

export default ContactUsPage;