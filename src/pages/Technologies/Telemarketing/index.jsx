import '../style.css';
import NavbarComp from '../../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../../components/Footer/index.jsx';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/Telemarketing/Banner1.webp'
import Banner2 from '../../../assets/Telemarketing/Banner2.webp'
import Banner3 from '../../../assets/Telemarketing/Banner3.webp'

const TelePage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <NavbarComp />
            <div className="main-web main-tele">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>Telemarketing</p>
                        <span >
                            Your online platform must convert, not confound your site visitors. A harmonious fusion of
                            exceptional user experience and visually pleasing design has the potential to fuel exponential
                            growth - let us guide you to that destination.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>Amplify your outreach and magnify your influence. Embrace responsiveness for unrivaled digital marketing success!</h1>
                        <p data-aos="zoom-in-up">
                            You require a digital marketing campaign that seamlessly adjusts to diverse platforms. Zero loading lags, impeccable navigation,
                            and optimal performance are non-negotiable. Pure results. That's our commitment.
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
                            Refuse to accept mediocrity in your online presence! Elevate your digital marketing game to new heights!
                        </p>
                        <h1 className='mb-3'>Let’s create a web masterpiece together!</h1>
                        <p data-aos="zoom-in-up">
                            We weave digital threads with empathy. Exceptional digital marketing goes beyond mere visuals. It's about
                            forging emotional bonds with your online audience.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>We excel at creating digital marketing strategies that captivate your audience and drive results!</p>
                        <span >
                            How do you find our website? Does it strike you as visually appealing? Is navigation smooth and intuitive?
                            We're confident we can craft a superior iteration tailored specifically to your niche, finely tuned for optimal
                            performance in the digital realm.
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

export default TelePage;