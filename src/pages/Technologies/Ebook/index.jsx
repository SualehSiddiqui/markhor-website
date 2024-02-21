import '../style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import Banner1 from '../../../assets/EBook/Banner1.webp';
import Banner2 from '../../../assets/EBook/Banner2.webp';
import Banner3 from '../../../assets/EBook/Banner3.webp';

const EbookPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="main-web main-ebook">
                <Container>
                    <div className='web-hero-text-div'>
                        <p>E-Book</p>
                        <span >
                            Your e-book service's current design may be deterring users, as it seems to provide a
                            subpar user experience and overwhelms them with intrusive notifications. This predicament
                            presents significant challenges for your audience, potentially prompting them to
                            uninstall the app permanently. Prompt intervention is crucial to remedy these issues.
                            Fortunately, we have the expertise to effectively tackle this problem on your behalf.
                        </span>
                    </div>
                </Container>
            </div>
            <Container className='mb-5'>
                <div className='d-flex sub-service-page-card-div' data-aos-duration="700" data-aos="zoom-in-up" >
                    <div className='service-page-card-text-div'>
                        <h1 className='mb-3'>Design tailored interactions, not standardized resolutions, to elevate your E-book service experience!</h1>
                        <p data-aos="zoom-in-up">
                            When designing your E-book service, it's paramount to avoid frustrating your visitors with complex interfaces and
                            convoluted menus. Our goal is to ensure that your app integrates seamlessly with your platform, providing users
                            with a simple and intuitive experience they're already familiar with. By prioritizing user experience, we can help
                            you accomplish this objective effortlessly. Let us streamline your E-book service, making it easy for users to
                            discover, access, and enjoy their favorite reads without any hassle.
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
                        <h1 className='mb-3'>
                            Discover thousands of captivating e-books tailored to your interests, offering an immersive reading
                            experience that delights every user.
                        </h1>
                        <p data-aos="zoom-in-up">
                            Crafting an app that users truly rely on is a daunting task, with 98% of attempts falling short. However, with our
                            expertise, we can develop an app users will consider indispensable.
                        </p>
                    </div>
                </div>
            </Container>
            <div className="main-web-2 mb-5">
                <Container className='main-web-2-container'>
                    <div className='web-2-text-div' data-aos-duration="700" data-aos="zoom-in-up">
                        <p>Transforming reading into an unforgettable journey, our e-book service captivates minds and sparks a passion for literature!</p>
                        <span >
                            We harbor an innovative concept for an application, backed by our proficiency in design. With a portfolio boasting over 50+
                            applications across diverse domains, we adeptly integrate artificial intelligence (AI), augmented reality (AR), and virtual
                            reality (VR). Let us enhance your application to contemporary standards, guaranteeing its success.
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

export default EbookPage;