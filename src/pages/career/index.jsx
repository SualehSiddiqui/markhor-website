import './style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import CounterSec from '../../sections/Counter.jsx'
import BulbSvg from '../../components/Svg/bulbSvg';
import BoardSvg from '../../components/Svg/boardSvg';
import MindSvg from '../../components/Svg/mindSvg';
import LineSvg from '../../components/Svg/linesSvg';
import BadgeSvg from '../../components/Svg/badgeSvg';
import BlockSvg from '../../components/Svg/blockSvg';
import AeroplaneSvg from '../../components/Svg/aeroplaneSvg';
import ArrowSvg from '../../components/Svg/arrowSvg';
import XSvg from '../../components/Svg/xSvg';
import HumanSvg from '../../components/Svg/humanSvg';
import CupSvg from '../../components/Svg/cupSvg';
import DartSvg from '../../components/Svg/dartSvg.js';
import JobSearch from '../../assets/Job/JobSearch.webp'
import Button from 'react-bootstrap/Button';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import RouterLink from '../../components/RouterLink/index.jsx';

const CareerPage = () => {
    const animationDuration = 1000;
    const animationType = "zoom-in";
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='service-page-img-div job-page-img-div'>
                <Container>
                    <TypeAnimation
                        sequence={[
                            'Career with',
                        ]}
                        wrapper="h1"
                        speed={10}
                        repeat={0}
                        className='service-page-main-hd'
                        cursor={false}
                    />
                    <TypeAnimation
                        // —
                        sequence={[
                            'Markhor Solution',
                        ]}
                        wrapper="h1"
                        speed={10}
                        repeat={0}
                        className='service-page-main-hd'
                        cursor={false}
                    />
                    <RouterLink page={'Career'} />
                </Container>
                <div className='shape-svg-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </div>
            <div className="job-page-container">
                <Container>
                    <h1 className='first-container-hd-1' data-aos="fade-right" data-aos-offset="300" data-aos-duration="700">Our Core</h1>
                    <h1 className='first-container-hd-2 ms-5' data-aos="fade-left" data-aos-offset="300" data-aos-duration="700">Values</h1>
                    <div className='core-value-div-container min-width-992'>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <BulbSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Innovation</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <BlockSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Collaboration</h4>
                                <p className='sub-core-value-text'>
                                    Diverse perspectives converge in harmonious collaboration, cultivating a vibrant ecosystem of innovation,
                                    guaranteeing the delivery of excellence!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <MindSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Empathy</h4>
                                <p className='sub-core-value-text'>
                                    Our empathic approach empowers us to delve deeply into user needs, yielding designs that authentically resonate
                                    and distinguish us from the rest.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='core-value-div-container core-value-div-container-2 min-width-992'>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <BadgeSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Excellence</h4>
                                <p className='sub-core-value-text'>
                                    We are distinguished by our pursuit of excellence, which drives us to create exceptional work that reflects
                                    the remarkable dedication and competence of our team.
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <LineSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Adaptability</h4>
                                <p className='sub-core-value-text'>
                                    Excelling in the face of change demonstrates our adaptability, bolstering our capacity to deftly maneuver
                                    through obstacles, solidifying our reputation as a resilient and nimble team.
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <BoardSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Accountability</h4>
                                <p className='sub-core-value-text'>
                                    Possessing ownership cultivates trust; our dedication to surpassing expectations
                                    enhances our standing as a dependable and adept team.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='core-value-div-container max-width-992'>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <BulbSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Innovation</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <BlockSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Collaboration</h4>
                                <p className='sub-core-value-text'>
                                    Diverse perspectives converge in harmonious collaboration, cultivating a vibrant ecosystem of innovation,
                                    guaranteeing the delivery of excellence!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <MindSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Empathy</h4>
                                <p className='sub-core-value-text'>
                                    Our empathic approach empowers us to delve deeply into user needs, yielding designs that authentically resonate
                                    and distinguish us from the rest.
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <BadgeSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Excellence</h4>
                                <p className='sub-core-value-text'>
                                    We are distinguished by our pursuit of excellence, which drives us to create exceptional work that reflects
                                    the remarkable dedication and competence of our team.
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <LineSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Adaptability</h4>
                                <p className='sub-core-value-text'>
                                    Excelling in the face of change demonstrates our adaptability, bolstering our capacity to deftly maneuver
                                    through obstacles, solidifying our reputation as a resilient and nimble team.
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <BoardSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Accountability</h4>
                                <p className='sub-core-value-text'>
                                    Possessing ownership cultivates trust; our dedication to surpassing expectations
                                    enhances our standing as a dependable and adept team.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container >
                <CounterSec />
                <Container className='mb-5'>
                    <h1 className='first-container-hd-1' data-aos="fade-right" data-aos-offset="300" data-aos-duration="700">Being our</h1>
                    <h1 className='first-container-hd-2 ms-5' data-aos="fade-left" data-aos-offset="300" data-aos-duration="700">Teammate</h1>
                    <div className='core-value-div-container min-width-992'>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <AeroplaneSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Innovation</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <ArrowSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Collaboration</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <XSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Empathy</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='core-value-div-container core-value-div-container-2 min-width-992'>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <HumanSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Excellence</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <CupSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Adaptability</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <DartSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Accountability</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='core-value-div-container max-width-992'>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <AeroplaneSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Innovation</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <ArrowSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Collaboration</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <XSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Empathy</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <HumanSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Excellence</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <CupSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Adaptability</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                        <div className='core-value-div' data-aos-duration={animationDuration} data-aos={animationType}>
                            <div className='svg-div'>
                                <DartSvg />
                            </div>
                            <div>
                                <h4 className='sub-core-value-hd'>Accountability</h4>
                                <p className='sub-core-value-text'>
                                    We excel through innovative thinking, propelling us to pioneer solutions that challenge conventions
                                    and establish us as a pioneering team!
                                </p>
                            </div>
                        </div>
                    </div>
                </Container >
                <div className='current-oppening-main-div mt-5'>
                    <Container className='current-oppening-main-container'>
                        <div className='current-opening-div'>
                            <h1 data-aos="fade-right" data-aos-offset="300" data-aos-duration="700">Current Opening</h1>
                            <div className='img-text-div-job'>
                                <img src={JobSearch} width={200} height={200} alt="" data-aos-duration={animationDuration} data-aos={animationType} />
                                <p>
                                    Currently, we do not have any vacancies. Kindly share your details, and we will reach
                                    out to you once a fitting opportunity arises.
                                </p>
                                <Link to={'mailto:'} className="contact-now-link">
                                    <Button variant="primary" className="contact-submit contact-now-button contact-now-button-career" type="submit">
                                        <FaPhoneAlt className="me-2" size={22} />
                                        Contact Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='role-main-div'>
                    <Container className='role-main-container'>
                        <h1>Unable to find a role that resonates with you? Inform us about what aligns best with your preferences!</h1>
                        <Link to={'mailto:'} className="contact-now-link">
                            <Button variant="primary" className="contact-submit contact-now-button contact-now-button-career" type="submit">
                                <FaPhoneAlt className="me-2" size={22} />
                                Contact Now
                            </Button>
                        </Link>
                    </Container>
                </div>
            </div >
        </>
    )
}
export default CareerPage;