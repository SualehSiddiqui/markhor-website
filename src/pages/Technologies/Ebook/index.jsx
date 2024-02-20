import '../style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/MobileAppDevelopement/Banner1.webp'
import Banner2 from '../../../assets/MobileAppDevelopement/Banner2.webp'
import Banner3 from '../../../assets/MobileAppDevelopement/Banner3.webp'

const WebDevPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="main-web main-app">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>Mobile App Design</p>
                        <span >
                            Is your application layout causing a loss of users? Poor user experience
                            and intrusive notifications create difficulties for them. You must take action
                            swiftly before they uninstall it permanently. We are capable of resolving this
                            issue for you.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>Deliver tailored experiences, not one-size-fits-all!</h1>
                        <p data-aos="zoom-in-up">
                            Avoid causing annoyance to visitors by presenting them with intricate interfaces and menus.
                            Ensure that your app aligns with your platform to deliver a straightforward and familiar user experience.
                            Allow us to assist you in achieving this goal.
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
                        <h1 className='mb-3'>Create with the aim of pleasing your users, rather than solely focusing on your preferences!</h1>
                        <p data-aos="zoom-in-up">
                            Crafting an app that becomes indispensable for users is quite challenging. 98% of attempts fall short. Allow us to assist
                            you in developing an app that users will rely on as a vital resource.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>We create applications that distinguish themselves and attract attention!</p>
                        <span >
                            You possess a concept for an application, and we possess adeptness in design. With over 120 applications
                            spanning various domains, we can seamlessly incorporate artificial intelligence (AI), augmented reality (AR),
                            and virtual reality (VR). Elevate your application to contemporary standards and ensure its triumph.
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