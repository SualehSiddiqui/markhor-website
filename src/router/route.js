import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

//Pages
import HomePage from "../pages/home/index.jsx";
import NotFoundPage from "../pages/notFound/index.jsx";
import ContactUsPage from "../pages/contactUs/index.jsx";

const RoutesPages = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ContactUs" element={<ContactUsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default RoutesPages;