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

const RoutesPages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ContactUs" element={<ContactUsPage />} />
                <Route path="/Services" element={<ServicePage />} />
                <Route path="/AboutUs" element={<AboutUsPage />} />
                <Route path="/Jobs" element={<JobPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default RoutesPages;