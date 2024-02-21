import "./style.css";
import Container from 'react-bootstrap/Container';
// import { Image } from 'antd';
import { useState } from "react";
import SvgComponent from "../components/SvgComponent";

//Logo Images
import FirstLogo from '../assets/Logo/FirstLogo.mp4';
import SecondLogo from '../assets/Logo/SecondLogo.mp4';
import ThirdLogo from '../assets/Logo/ThirdLogo.mp4';
import FourthLogo from '../assets/Logo/FourthLogo.mp4';
import FifthLogo from '../assets/Logo/FifthLogo.mp4';
import SixthLogo from '../assets/Logo/SixthLogo.mp4';
import SeventhLogo from '../assets/Logo/SeventhLogo.mp4';
import EightLogo from '../assets/Logo/EightLogo.mp4';
import NinthLogo from '../assets/Logo/NinthLogo.mp4';


//Overlay Images 
import FirstOverlay from '../assets/Overlay/FirstOverLay.mp4';
import SecondOverlay from '../assets/Overlay/SecondOverLay.mp4';
import ThirdOverlay from '../assets/Overlay/ThirdOverLay.mp4';
import FourthOverlay from '../assets/Overlay/FourthOverLay.mp4';
import FifthOverlay from '../assets/Overlay/FifthOverLay.mp4';
import SixthOverlay from '../assets/Overlay/SixthOverLay.mp4';
import SeventhOverlay from '../assets/Overlay/SeventhOverLay.mp4';
import EightOverlay from '../assets/Overlay/EightOverLay.mp4';


//Banners Images
import FirstBanner from '../assets/Banner/First.jpg';
import SecondBanner from '../assets/Banner/Second.jpg';
import ThirdBanner from '../assets/Banner/Third.jpg';
import FourthBanner from '../assets/Banner/Fourth.jpg';
import FifthBanner from '../assets/Banner/Fifth.jpg';
import SixthBanner from '../assets/Banner/Sixth.jpg';
import SeventhBanner from '../assets/Banner/Seventh.jpg';
import EighthBanner from '../assets/Banner/Eight.jpg';
import NinthBanner from '../assets/Banner/Ninth.jpg';
import TenthBanner from '../assets/Banner/Tenth.jpg';
import EleventhBanner from '../assets/Banner/Eleventh.jpg';
import TwevelvethBanner from '../assets/Banner/Twevelveth.jpg';
import ThirteenthBanner from '../assets/Banner/Thirteenth.jpg';
import ForthenthBanner from '../assets/Banner/Forthenth.jpg';

const ProjectSec = () => {
    const [whichProject, setWhichProject] = useState("Logo Design");

    return (
        <div className="main-service ">
            <h4
                className="procedure-hd"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="700"
            >
                Case Study
            </h4>
            <div className="main-service-hd-1">
                <h1
                    className="main-service-hd"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="700"
                >
                    Our Latest Projects
                </h1>
                <SvgComponent />
            </div>
            <Container className="service-container mt-5">
                <div>
                    <button
                        className={`logo-button ${whichProject === 'Logo Design' ? 'selected-logo-button' : ''}`}
                        onClick={() => setWhichProject('Logo Design')}
                    >
                        Logo Design
                    </button>
                    <button
                        className={`logo-button ${whichProject === 'Banners' ? 'selected-logo-button' : ''}`}
                        onClick={() => setWhichProject('Banners')}
                    >
                        Banners
                    </button>
                    <button
                        className={`logo-button ${whichProject === 'Overlay' ? 'selected-logo-button' : ''}`}
                        onClick={() => setWhichProject('Overlay')}
                    >
                        Overlay
                    </button>
                </div>
                <div className="main-img-container">
                    {
                        whichProject === "Logo Design" ?
                            <div className="logo-container">
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={FirstLogo} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={SecondLogo} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={ThirdLogo} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={FourthLogo} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={FifthLogo} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={SixthLogo} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={SeventhLogo} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={EightLogo} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <video className="image" autoPlay loop src={NinthLogo} muted type="video/mp4" />
                                </div>
                            </div>
                            : ''}
                    {
                        whichProject === "Banners" ?
                            <div className="logo-container">
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={FirstBanner}
                                        alt="FirstBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={SecondBanner}
                                        alt="SecondBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={ThirdBanner}
                                        alt="ThirdBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={FourthBanner}
                                        alt="FourthBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={FifthBanner}
                                        alt="FifthBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={SixthBanner}
                                        alt="SixthBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={SeventhBanner}
                                        alt="SeventhBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={EighthBanner}
                                        alt="EighthBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={NinthBanner}
                                        alt="NinthBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={TenthBanner}
                                        alt="TenthBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={EleventhBanner}
                                        alt="EleventhBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={TwevelvethBanner}
                                        alt="TwevelvethBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={ThirteenthBanner}
                                        alt="ThirteenthBanner"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <img
                                        className="image"
                                        src={ForthenthBanner}
                                        alt="ForthenthBanner"
                                    />
                                </div>
                            </div>
                            : ''}
                    {
                        whichProject === "Overlay" ?
                            <div className="logo-container">
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <video className="image" autoPlay loop src={FirstOverlay} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <video className="image" autoPlay loop src={SecondOverlay} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <video className="image" autoPlay loop src={ThirdOverlay} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <video className="image" autoPlay loop src={FourthOverlay} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <video className="image" autoPlay loop src={FifthOverlay} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <video className="image" autoPlay loop src={SixthOverlay} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <video className="image" autoPlay loop src={SeventhOverlay} muted type="video/mp4" />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card banner-card">
                                    <video className="image" autoPlay loop src={EightOverlay} muted type="video/mp4" />
                                </div>
                            </div>
                            : ''}
                </div>
            </Container>
        </div>
    );
};

export default ProjectSec;