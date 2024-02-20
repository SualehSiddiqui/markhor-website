import '../style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/MotionGraphics/Banner1.webp'
import Banner2 from '../../../assets/MotionGraphics/Banner2.webp'
import Banner3 from '../../../assets/MotionGraphics/Banner3.webp'

const MotionPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="main-web main-motion">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>Motion Graphics</p>
                        <span >
                            Your online platform must persuade, not perplex your site visitors. A seamless fusion of exceptional
                            user experience and visually captivating design is the catalyst for exponential expansion - let us guide
                            you towards achieving this goal through our digital marketing expertise.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>
                            Maximize your outreach and amplify your influence. Embrace responsiveness for unparalleled digital marketing success!
                        </h1>
                        <p data-aos="zoom-in-up">
                            You require a digital marketing campaign that seamlessly adjusts to various platforms. Zero loading lags, no
                            navigational hurdles, and optimal performance are what we deliver. Pure outcomes. That's our commitment in digital
                            marketing.
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
                        <p data-aos="zoom-in-up" style={{ textTransform: "uppercase" }}>
                            Don't settle for mediocre digital presence! Elevate your online impact with our tailored digital marketing solutions!
                        </p>
                        <h1 className='mb-3'>Let's collaborate to craft a digital marvel that sets your online presence on fire!</h1>
                        <p data-aos="zoom-in-up">
                            We weave digital threads with empathy. Exceptional digital marketing transcends mere visuals. It's about forging
                            emotional bonds with your online audience.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>Crafting digital campaigns that resonate and engage!</p>
                        <span >
                            How do you feel about the current state of your website? Is it visually appealing and user-friendly? We specialize in crafting highly
                            optimized websites tailored specifically to your niche, ensuring maximum impact and seamless navigation for your audience.
                        </span>
                    </div>
                    <div className='web-2-img-div' data-aos-duration="700" data-aos="zoom-in">
                        <img src={Banner3} alt="Banner3" className='web-2-img' />
                    </div>

                </Container>
            </div>
        </>
    )
}

export default MotionPage;