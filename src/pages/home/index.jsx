// import "./style.css";
import NavbarComp from "../../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CorouselComp from '../../components/Carousel/index.jsx';
import Footer from "../../components/Footer";
import ServiceSec from "../../sections/Services.jsx";
import ProcedureSec from "../../sections/Procedure.jsx";
import ProjectSec from "../../sections/Projects.jsx";
import CounterSec from "../../sections/Counter.jsx";
import TechnologiesSec from "../../sections/Technologies.jsx";
import ContactSec from "../../sections/Contact.jsx";

const HomePage = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div>
            {/* Navbar */}
            <NavbarComp />
            <CorouselComp />
            {/* Services Section */}
            <ServiceSec />
            {/* Procedure Section */}
            <ProcedureSec />
            {/* Case Study */}
            <ProjectSec />
            {/* Counter */}
            <CounterSec />
            {/* Technologies Section*/}
            <TechnologiesSec />
            {/* Contact Section */}
            <ContactSec />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage;