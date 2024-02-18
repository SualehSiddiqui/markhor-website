import './style.css';
import { Carousel } from 'antd';
import Container from 'react-bootstrap/Container';
import First from '../../assets/Carousel/First.jpg'
import Second from '../../assets/Carousel/Second.jpg'
import Third from '../../assets/Carousel/Third.jpg'
import Fourth from '../../assets/Carousel/Fourth.jpg'

const CorouselComp = () => (
    <Carousel autoplay className='carousel-div' fade speed={1000} autoplaySpeed	={5000}>
        <div className='carousel-div'>
            <div className='text-div-carousel'>
                <Container>
                    <h1 className='carousel-text-h1'>We make technology Simple</h1>
                    <p className='carousel-text-p'>Proactive Mind set Industry Knowledge Commitment to Quality On Time Delivey</p>
                </Container>
            </div>
            <img src={First} alt="Web Devlopement" className='carousel-image' />
        </div>
        <div className='carousel-div'>
            <div className='text-div-carousel'>
                <Container>
                    <p className='carousel-text-p'>
                        We are not just producing customized software but customize ourselves to the customer needs to provide the best possible solution.
                    </p>
                </Container>
            </div>
            <img src={Second} alt="Mobile App Devlopement" className='carousel-image' />
        </div>
        <div className='carousel-div'>
            <div className='text-div-carousel'>
                <Container>
                    <p className='carousel-text-p'>
                        Our innovative software development process enables us to provide best quality in low price.</p>
                </Container>
            </div>
            <img src={Third} alt="Motion Graphics" className='carousel-image' />
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
            <img src={Fourth} alt="Graphic Desinging" className='carousel-image' />
        </div>
    </Carousel>
);
export default CorouselComp;