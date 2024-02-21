import "./style.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CorouselComp from '../../components/Carousel/index.jsx';
import ServiceSec from "../../sections/Services.jsx";
import ProcedureSec from "../../sections/Procedure.jsx";
import ProjectSec from "../../sections/Projects.jsx";
import CounterSec from "../../sections/Counter.jsx";
import TechnologiesSec from "../../sections/Technologies.jsx";
import ContactSec from "../../sections/Contact.jsx";
import backImage from "../../assets/background-img-2.png"

const HomePage = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="main-home-div">
            <div className="sub-home-div">
                <img src={backImage} alt="" className="background-image" />
            </div>
            <div>
                {/* Carousel */}
                <CorouselComp />
                {/* Services Section */}
                <ServiceSec />
                {/* Procedure Section */}
                <ProcedureSec />
                {/* Case Study */}
                <ProjectSec />
                {/* Counter */}
                <div style={{ backgroundColor: 'var(--card-bg)'}}>
                <CounterSec />
            </div>
            {/* Technologies Section*/}
            <TechnologiesSec />
            {/* Contact Section */}
            <ContactSec />
        </div>
        </div >
    )
}

export default HomePage;