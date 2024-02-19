import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//Pages
import HomePage from "../pages/home/index.jsx";
import NotFoundPage from "../pages/notFound/index.jsx";
import ContactUsPage from "../pages/contactUs/index.jsx";
import ServicePage from "../pages/service/index.jsx";
import AboutUsPage from "../pages/aboutUs/index.jsx";
import CareerPage from "../pages/career/index.jsx";
import WebDevPage from "../pages/Technologies/WebDevelopement/index.jsx";
import EbookPage from "../pages/Technologies/Ebook/index.jsx";
import BrandPage from "../pages/Technologies/BrandIdentity/index.jsx";
import DigitalPage from "../pages/Technologies/DigitalMarketing/index.jsx";
import UiPage from "../pages/Technologies/UiDesigning/index.jsx";
import MotionPage from "../pages/Technologies/MotionGraphics/index.jsx";
import SocialPage from "../pages/Technologies/SocialMediaMarketing/index.jsx";
import TelePage from "../pages/Technologies/Telemarketing/index.jsx";
import ScrollToTop from "../components/ScrollToTop/index.jsx";
//Navber
import NavbarComp from '../components/Navbar';
//Sub Header
import SubHeaderComp from '../components/SubHeader/index.jsx';
// Footer
import Footer from '../components/Footer/index.jsx';


const RoutesPages = () => {
    return (
        <>
            <Router>
                {/* <ScrollToTop /> */}
                <SubHeaderComp />
                <NavbarComp />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ContactUs" element={<ContactUsPage />} />
                    <Route path="/Services" element={<ServicePage />} />
                    <Route path="/AboutUs" element={<AboutUsPage />} />
                    <Route path="/Career" element={<CareerPage />} />
                    <Route path="/WebDevelopement" element={<WebDevPage />} />
                    <Route path="/EBook" element={<EbookPage />} />
                    <Route path="/BrandIdentity" element={<BrandPage />} />
                    <Route path="/DigitalMarketing" element={<DigitalPage />} />
                    <Route path="/UiDesigning" element={<UiPage />} />
                    <Route path="/MotionGraphics" element={<MotionPage />} />
                    <Route path="/SocialMediaMarketing" element={<SocialPage />} />
                    <Route path="/Telemarketing" element={<TelePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
                <Footer />
            </Router>
        </>

    )
}

export default RoutesPages;