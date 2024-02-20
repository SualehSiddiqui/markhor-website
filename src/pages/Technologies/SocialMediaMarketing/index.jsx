import '../style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/SocialMediaMarketing/Banner1.webp'
import Banner2 from '../../../assets/SocialMediaMarketing/Banner2.webp'
import Banner3 from '../../../assets/SocialMediaMarketing/Banner3.webp'

const SocialPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="main-web main-social">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>Social Media Marketing</p>
                        <span >
                            Your online platform ought to entice, not befuddle, your site visitors. A harmonious fusion of
                            seamless user experience and visually captivating design has the potential to spark exponential
                            growth - let us guide you to that pinnacle.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>Boost reach, amplify impact: Go responsive!</h1>
                        <p data-aos="zoom-in-up">
                            You require a digital marketing strategy that seamlessly adjusts to various platforms. No lagging
                            load times, no navigation hiccups, and no performance glitches. Only tangible outcomes. That's our expertise.
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
                            DON'T SETTLE FOR ORDINARY DIGITAL PRESENCE!
                        </p>
                        <h1 className='mb-3'>Let’s create a web masterpiece together!</h1>
                        <p data-aos="zoom-in-up">
                            We weave digital threads with empathy. Exceptional digital marketing transcends aesthetics alone.
                            It's about forging a profound emotional bond with your online audience.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>Crafting digital campaigns that captivate and convert.</p>
                        <span >
                            How do you find our website? Does it possess an appealing aesthetic? Is navigation smooth and intuitive? Let's
                            craft an enhanced iteration tailored precisely to your niche, meticulously optimized for maximum digital marketing
                            impact.
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

export default SocialPage;