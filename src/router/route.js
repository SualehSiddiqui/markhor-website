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
import JobPage from "../pages/job/index.jsx";
import WebDevPage from "../pages/Technologies/WebDevelopement/index.jsx";
import MobDevPage from "../pages/Technologies/MobileAppDevelopement/index.jsx";
import BrandPage from "../pages/Technologies/BrandIdentity/index.jsx";
import DigitalPage from "../pages/Technologies/DigitalMarketing/index.jsx";
import GraphicPage from "../pages/Technologies/GraphicDesigning/index.jsx";
import MotionPage from "../pages/Technologies/MotionGraphics/index.jsx";
import SocialPage from "../pages/Technologies/SocialMediaMarketing/index.jsx";
import TelePage from "../pages/Technologies/Telemarketing/index.jsx";

const RoutesPages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ContactUs" element={<ContactUsPage />} />
                <Route path="/Services" element={<ServicePage />} />
                <Route path="/AboutUs" element={<AboutUsPage />} />
                <Route path="/Jobs" element={<JobPage />} />
                <Route path="/WebDevelopement" element={<WebDevPage />} />
                <Route path="/MobileAppDevelopement" element={<MobDevPage />} />
                <Route path="/BrandIdentity" element={<BrandPage />} />
                <Route path="/DigitalMarketing" element={<DigitalPage />} />
                <Route path="/GraphicDesigning" element={<GraphicPage />} />
                <Route path="/MotionGraphics" element={<MotionPage />} />
                <Route path="/SocialMediaMarketing" element={<SocialPage />} />
                <Route path="/Telemarketing" element={<TelePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default RoutesPages;