import "./style.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';
import navLogo from "../../assets/nav-logo.png";


const pages = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Services",
        link: "/Services",
    },
    {
        name: "About Us",
        link: "/AboutUs",
    },
    {
        name: "Jobs",
        link: "/Jobs",
    },
    {
        name: "Contact Us",
        link: "/ContactUs",
    },
]

function NavbarComp() {
    let location = useLocation();

    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body main-navbar">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={navLogo} className="nav-logo-img" alt="Markhor_Soultion" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            width="90%"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Markhor
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {pages.map((v, i) => {
                                        return (
                                            <Nav.Link
                                                className={`nav-links ms-2 me-4 ${location.pathname === v.link ? 'nav-active-link' : ''}`}
                                                key={i}
                                                href={v.link}
                                            >
                                                {v.name}
                                            </Nav.Link>
                                        )
                                    })}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavbarComp;