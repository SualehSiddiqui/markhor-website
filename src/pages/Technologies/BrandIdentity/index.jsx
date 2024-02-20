import '../style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/BrandIdentity/Banner1.webp'
import Banner2 from '../../../assets/BrandIdentity/Banner2.webp'
import Banner3 from '../../../assets/BrandIdentity/Banner3.webp'

const WebDevPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="main-web main-brand-identity">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>Branding Identity</p>
                        <span >
                            You aspire for your brand to sparkle and charm your perfect clientele. But
                            how can you achieve this? By concocting an exclusive, unforgettable, and persuasive
                            narrative that deeply connects with them. And that's precisely the service we provide.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>Is your brand struggling to stand out amidst the competition? Let it sparkle!</h1>
                        <p data-aos="zoom-in-up">
                            Crafting an exclusive identity surpasses mere emblematics. It embodies a narrative, a communication, a commitment.
                            Forge a brand that lingers in the minds of your audience by shaping an identity that strikes a chord with them.
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
                            COME ON, LET'S ESTABLISH YOUR BRAND NOW!
                        </p>
                        <h1 className='mb-3'>Your identity, your expression, your narrative: let it shine!</h1>
                        <p data-aos="zoom-in-up">
                            Is your brand receiving the recognition it merits? Our team of branding specialists can
                            assist you in establishing a connection with your target audience and standing out.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>What sets apart our branding design service?</p>
                        <span >
                            You desire a brand that captivates and involves your target demographic, not merely appears appealing. Hence, a strategy
                            supported by outcomes becomes imperative. Our brand conceptualization has enhanced interaction by as much as 60% for customers
                            akin to yourself.
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

export default WebDevPage;