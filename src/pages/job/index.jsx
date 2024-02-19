import './style.css';
import Container from 'react-bootstrap/Container';
import AOS from "aos";
import { useEffect } from 'react';
import Img01 from '../../assets/Job/img01.jpg'
import Img02 from '../../assets/Job/img02.jpg'
import Img03 from '../../assets/Job/img03.jpg'
import Img04 from '../../assets/Job/img04.jpg'
import Img05 from '../../assets/Job/img05.jpg'
import Img06 from '../../assets/Job/img06.jpg'
import Img07 from '../../assets/Job/img07.jpg'
import Img08 from '../../assets/Job/img08.jpg'
import { TypeAnimation } from 'react-type-animation';

const JobPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className='service-page-img-div job-page-img-div'>
                <Container>
                    <TypeAnimation
                        sequence={[
                            'Jobs',
                        ]}
                        wrapper="h1"
                        speed={10}
                        repeat={0}
                        className='service-page-main-hd'
                        cursor={false}
                    />
                </Container>
                <div className='shape-svg-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="#FFFFFF"></path>
                    </svg>
                </div>
            </div>
            <div className="job-page-img-container">
                <Container className='main-img-container'>
                    <div className='sub-img-container'>
                        <div className='two-img-container me-2'>
                            <div className='img-div' data-aos-duration="700" data-aos="zoom-in-up">
                                <img src={Img01} alt="Img01" className='about-page-img' />
                            </div>
                            <div className='img-div img-div-2' data-aos-duration="700" data-aos="zoom-in-up">
                                <img src={Img02} alt="Img01" className='about-page-img' />
                            </div>
                        </div>
                        <div className='two-img-container me-2'>
                            <div className='img-div img-div-3' data-aos-duration="700" data-aos="zoom-in-up">
                                <img src={Img03} alt="Img01" className='about-page-img' />
                            </div>
                        </div>
                        <div className='two-img-container me-2'>
                            <div className='img-div img-div-4' data-aos-duration="700" data-aos="zoom-in-up">
                                <img src={Img04} alt="Img01" className='about-page-img' />
                            </div>
                            <div className='img-div img-div-5 ms-auto' data-aos-duration="700" data-aos="zoom-in-up">
                                <img src={Img05} alt="Img01" className='about-page-img' />
                            </div>
                        </div>
                        <div className='two-img-container me-2'>
                            <div className='img-div img-div-6' data-aos-duration="700" data-aos="zoom-in-up">
                                <img src={Img06} alt="Img01" className='about-page-img' />
                            </div>
                            <div className='img-div img-div-7 ms-auto' data-aos-duration="700" data-aos="zoom-in-up">
                                <img src={Img07} alt="Img01" className='about-page-img' />
                            </div>
                        </div>
                        <div className='two-img-container'>
                            <div className='img-div img-div-8' data-aos-duration="700" data-aos="zoom-in-up">
                                <img src={Img08} alt="Img01" className='about-page-img' />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default JobPage;