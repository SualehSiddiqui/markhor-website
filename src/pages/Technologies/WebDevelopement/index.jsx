import './style.css';
import NavbarComp from '../../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../../components/Footer/index.jsx';
import AOS from "aos";
import { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const WebDevPage = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <NavbarComp />
            <div className="main-web">

            </div>
            <Footer />
        </>
    )
}

export default WebDevPage;