import './style.css';
import { Carousel } from 'antd';
import Container from 'react-bootstrap/Container';
import First from '../../assets/Carousel/1.png'
import Two from '../../assets/Carousel/2.png'
import Three from '../../assets/Carousel/3.png'
import Four from '../../assets/Carousel/4.png'

const CorouselComp = () => (
    <Carousel autoplay className='carousel-div' fade>
        <div className='carousel-div'>
            <div className='text-div-carousel'>
                <Container>
                    <h1 className='carousel-text-h1'>We make technology Simple</h1>
                    <p className='carousel-text-p'>Proactive MindsetIndustry KnowledgeCommitment to QualityOn Time Delivey</p>
                </Container>
            </div>
            <img src={First} alt="Web Devlopement" className='carousel-image' />
        </div>
        <div className='carousel-div'>
            <div className='text-div-carousel'>
                <Container>
                    <p className='carousel-text-p'>
                        We are not just producing customized software but customize ourselves tothe customer needs to provide the best possible solution.
                    </p>
                </Container>
            </div>
            <img src={Two} alt="Mobile App Devlopement" className='carousel-image' />
        </div>
        <div className='carousel-div'>
            <div className='text-div-carousel'>
                <Container>
                    <p className='carousel-text-p'>
                        Our innovative software development process enables us to provide best quality in low price.</p>
                </Container>
            </div>
            <img src={Three} alt="Motion Graphics" className='carousel-image' />
        </div>
        <div className='carousel-div'>
            <div className='text-div-carousel'>
                <Container>
                    <h1 className='carousel-text-h1'>On Time Delivery</h1>
                    <p className='carousel-text-p'>
                        Reduce IT costs
                        <br />
                        Excellent Customer Service
                        <br />
                        Experience the Flexibility and Support
                    </p>
                </Container>
            </div>
            <img src={Four} alt="Graphic Desinging" className='carousel-image' />
        </div>
    </Carousel>
);
export default CorouselComp;