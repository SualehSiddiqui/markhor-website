import '../style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/GraphicDesigning/Banner1.webp'
import Banner2 from '../../../assets/GraphicDesigning/Banner2.webp'
import Banner3 from '../../../assets/GraphicDesigning/Banner3.webp'

const GraphicPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="main-web main-graphic">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>Ui/Ux Designing</p>
                        <span >
                            Are your website's bounce rates soaring? Visitors depart due to lackluster visuals and slow
                            loading times. Transform casual visitors into loyal customers with our data-inspired graphic
                            design overhaul.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>Amplify your reach and elevate your impact. Embrace responsiveness in design!</h1>
                        <p data-aos="zoom-in-up">
                            You require graphic designs that seamlessly adjust to any medium. No lagging renderings, no design
                            inconsistencies, and no quality compromises. Only impactful outcomes. That's our specialty.
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
                            "Settle for nothing less than extraordinary graphic design!"
                        </p>
                        <h1 className='mb-3'>Let's collaborate to craft a digital masterpiece!</h1>
                        <p data-aos="zoom-in-up">
                            We mold pixels with empathy. Exceptional design transcends mere aesthetics. It's about forging an
                            emotional bond with your audience.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>We excel in crafting graphic designs that resonate deeply with your audience!</p>
                        <span >
                            How do you feel about the visual appeal and navigational ease of our website? Are you satisfied with its
                            current state? We're prepared to craft an enhanced iteration tailored specifically to your niche, ensuring optimal
                            optimization and engagement.
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

export default GraphicPage;