import './style.css';
import Container from 'react-bootstrap/Container';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const SubHeaderComp = () => {
    return (
        <div className='sub-header-div'>
            <Container className='sub-header-container'>
                <div className='sub-header-text-div'>We are your reliable technology partner.</div>
                <div className='sub-header-contact-div'>
                    <Link className='sub-header-phone-div' to={'tel:++923183253219'} target='_blank'>
                        <FaPhoneAlt className='me-1' />
                        <span>+92 318 3253219</span>
                    </Link>
                    <Link className='sub-header-phone-div' to={'mailto:info@markhorsolution.co'} target='_blank'>
                        <MdMailOutline className='me-1' />
                        <span>info@markhorsolution.com</span>
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default SubHeaderComp;