import './style.css'
import { Container } from "react-bootstrap";

const Hero = () => {
    return (
        <div className='main-hero-div'>
            <Container style={{ zIndex: '999' }}>
                <div className='sub-hero-div-2'>
                    <h2>
                        Digital Product
                        <span className="mobile-symbol">&amp;</span>
                        <span className="desktop-symbol">—</span>
                        <span className="color-white">UX Design Agency</span>
                    </h2>
                    <p className='hero-para'>
                        "Markhor Solution, a renowned worldwide agency specializing in UX Design
                        and Web Design, excels in reshaping experiences and driving business expansion for brands."
                    </p>
                </div>
            </Container>
            <div className='sub-hero-div'>
                <video width="100%" height="100%" autoPlay="autoplay" loop="loop" className='video' muted="muted" playsInline="playsinline">
                    <source src="https://uiart.io/video/banner-animation.mov" type="video/webm" />
                </video>
            </div>
        </div>
    )
}

export default Hero;