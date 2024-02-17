import '../style.css';
import NavbarComp from '../../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../../components/Footer/index.jsx';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/DigitalMarketing/Banner1.webp'
import Banner2 from '../../../assets/DigitalMarketing/Banner2.webp'
import Banner3 from '../../../assets/DigitalMarketing/Banner3.webp'

const DigitalPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <NavbarComp />
            <div className="main-web main-digital">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>Digital Marketing</p>
                        <span >
                            Your online presence must convert, not confound your visitors. A seamless fusion of
                            impeccable user experience and visually captivating design has the power to spark exponential growth
                            - let us guide you toward that achievement.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>Amplify your outreach and magnify your influence. Embrace responsiveness for unrivaled
                            digital marketing success!</h1>
                        <p data-aos="zoom-in-up">
                            You require a digital marketing approach that seamlessly adjusts to diverse platforms. No lagging load
                            times, no navigation hiccups, and no performance glitches. Only tangible outcomes. That's our promise.
                        </p>
                    </div>
                    <div className='service-page-card-img-div'>
                        <img src={Banner1} alt="Banner3" className='service-page-card-img' />
                    </div>
                </div>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-img-div'>
                        <img src={Banner2} alt="Banner3" className='service-page-card-img' />
                    </div>
                    <div className='service-page-card-text-div mt-100px'>
                        <p data-aos="zoom-in-up" >
                            AIM HIGHER THAN MEDIOCRITY IN YOUR ONLINE PRESENCE!
                        </p>
                        <h1 className='mb-3'>Let's craft a digital marvel collaboratively!</h1>
                        <p data-aos="zoom-in-up">
                            We sculpt digital experiences with empathy. Exceptional digital marketing goes beyond surface appeal—it's a
                            bout forging emotional bonds with your audience.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>We possess the expertise to craft digital marketing campaigns that resonate with your audience and drive results!</p>
                        <span >
                            How do you perceive our online platform? Is it visually appealing? User-friendly in terms of navigation? We have the capability to craft
                            an enhanced iteration tailor-made for your niche, finely optimized to drive optimal results in digital marketing.
                        </span>
                    </div>
                    <div className='web-2-img-div' data-aos-duration="700" data-aos="zoom-in">
                        <img src={Banner3} alt="Banner3" className='web-2-img' />
                    </div>

                </Container>
            </div>
            <Footer />
        </>
    )
}

export default DigitalPage;