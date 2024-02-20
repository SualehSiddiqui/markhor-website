import '../style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/WebDevelopement/banner1.jpg'
import Banner2 from '../../../assets/WebDevelopement/Banner2.webp'
import Banner3 from '../../../assets/WebDevelopement/Banner3.webp'

const WebDevPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="main-web">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>Web Design & Development</p>
                        <span >
                            Your online platform ought to captivate, not bewilder your guests. A flawless fusion of
                            excellent user interaction and visually pleasing layout can spark expansion - we're here to
                            assist you in achieving that.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>Enhance outreach and amplify influence. Embrace responsiveness!</h1>
                        <p data-aos="zoom-in-up">
                            You require a website that adjusts to every screen dimension. No loading lags,
                            no navigation complications, and no performance issues. Only outcomes. That's our
                            specialty.
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
                        <p data-aos="zoom-in-up" style={{ textTransform: "uppercase" }} >
                            Refuse to accept a mediocre website!
                        </p>
                        <h1 className='mb-3'>Let’s create a web masterpiece together!</h1>
                        <p data-aos="zoom-in-up">
                            We create digital elements with compassion. Exceptional design transcends mere
                            appearances. It involves forging an empathetic bond with those who interact with it.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>We excel at creating websites that delight your users!</p>
                        <span >
                            What are your impressions of our website? Is it visually appealing? User-friendly? We have
                            the capability to develop an enhanced iteration tailored specifically to your industry, finely
                            tuned for optimal performance.
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