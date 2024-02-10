import React from 'react';
import { Carousel } from 'antd';
import './style.css';
import Web from '../../assets/Carousel/1.png'
import Mobile from '../../assets/Carousel/2.jpg'
import Motion from '../../assets/Carousel/3.jpg'
import Graphic from '../../assets/Carousel/4.jpg'
// const contentStyle = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };
const CorouselComp = () => (
    <Carousel autoplay className='carousel-div' fade>
        <div className='carousel-div'>
            <img src={Web} alt="Web Devlopement" className='carousel-image' />
        </div>
        <div className='carousel-div'>
            <img src={Mobile} alt="Mobile App Devlopement" className='carousel-image' />
        </div>
        <div className='carousel-div'>
            <img src={Motion} alt="Motion Graphics" className='carousel-image' />
        </div>
        <div className='carousel-div'>
            <img src={Graphic} alt="Graphic Desinging" className='carousel-image' />
        </div>
    </Carousel>
);
export default CorouselComp;