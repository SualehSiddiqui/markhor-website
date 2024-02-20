import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { MdDoubleArrow } from "react-icons/md";

const RouterLink = ({ page }) => {
    let location = useLocation();
    return (
        <>
            <Link to={'/'} className='route-link-page'>Home</Link>
            <MdDoubleArrow className="route-link-page ms-2 me-2" />
            <Link to={location.pathname} className='route-link-page'>{page}</Link>
        </>
    )
}

export default RouterLink