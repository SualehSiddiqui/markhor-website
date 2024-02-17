import "./style.css";
import Container from 'react-bootstrap/Container';
import { Image } from 'antd';
import { useState } from "react";
import SvgComponent from "../components/SvgComponent";

//Logo Images
import hacker from '../assets/Logo/hacker.jpg';
import Import from '../assets/Logo/import.jpg';
import skeleton from '../assets/Logo/skeleton.jpg';
import vpn from '../assets/Logo/vpn.jpg';
import against from '../assets/Logo/against.jpg';
import mini from '../assets/Logo/mini.jpg';
import fitness from '../assets/Logo/fitness.jpg';
import zore from '../assets/Logo/zore.jpg';

//Webistes Images 
import three from '../assets/Websites/3in-scaled.jpg';
import five from '../assets/Websites/5in-scaled.jpg';
import six1 from '../assets/Websites/7in-scaled.jpg';
import six2 from '../assets/Websites/6in-scaled.jpg';
import eight from '../assets/Websites/8in-scaled.jpg';
import nine from '../assets/Websites/9in-scaled.jpg';

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
                        className={`logo-button ${whichProject === 'Websites' ? 'selected-logo-button' : ''}`}
                        onClick={() => setWhichProject('Websites')}
                    >
                        Websites
                    </button>
                    <button
                        className={`logo-button ${whichProject === 'Mobile Apps' ? 'selected-logo-button' : ''}`}
                        onClick={() => setWhichProject('Mobile Apps')}
                    >
                        Mobile Apps
                    </button>
                </div>
                <div className="main-img-container">
                    {
                        whichProject === "Logo Design" ?
                            <div className="logo-container">
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={hacker}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={Import}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={against}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={fitness}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={mini}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={skeleton}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={vpn}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={zore}
                                    />
                                </div>
                            </div>
                            : ''}
                    {
                        whichProject === "Websites" ?
                            <div className="logo-container">
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card website-card">
                                    <img
                                        className="website-image"
                                        src={three}
                                        alt="three"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card website-card">
                                    <img
                                        className="website-image"
                                        src={five}
                                        alt="three"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card website-card">
                                    <img
                                        className="website-image"
                                        src={six1}
                                        alt="three"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card website-card">
                                    <img
                                        className="website-image"
                                        src={six2}
                                        alt="three"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card website-card">
                                    <img
                                        className="website-image"
                                        src={eight}
                                        alt="three"
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card website-card">
                                    <img
                                        className="website-image"
                                        src={nine}
                                        alt="three"
                                    />
                                </div>
                            </div>
                            : ''}
                    {
                        whichProject === "Mobile Apps" ?
                            <div className="logo-container">
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={hacker}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={Import}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={against}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={fitness}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={mini}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={skeleton}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={vpn}
                                    />
                                </div>
                                <div data-aos-duration="700" data-aos="zoom-in-up" className="logo-card">
                                    <Image
                                        className="image"
                                        src={zore}
                                    />
                                </div>
                            </div>
                            : ''}
                </div>
            </Container>
        </div>
    );
};

export default ProjectSec;