import './style.css';
import NavbarComp from '../../components/Navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../components/Footer/index.jsx'
import { TypeAnimation } from 'react-type-animation';


const NotFoundPage = () => {
    return (
        <div>
            <NavbarComp />
            <div className="not-found-main">
                <Container className="service-container">
                    <div className="notfound-div">
                        <h1>
                            {/* The page can’t be found. */}
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'The page can’t be found.',
                                    // 1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    // 'We produce food for Hamsters',
                                    // 1000,
                                    // 'We produce food for Guinea Pigs',
                                    // 1000,
                                    // 'We produce food for Chinchillas',
                                    // 1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={0}
                                cursor={false}
                            />
                        </h1>
                        <p>It looks like nothing was found at this location.</p>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default NotFoundPage;