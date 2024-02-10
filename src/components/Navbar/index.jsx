import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./style.css"


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
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body main-navbar">
                    <Container>
                        <Navbar.Brand href="#">Markhor</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Markhor
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {pages.map((v, i) => {
                                        return <Nav.Link className='nav-links ms-2 me-4' key={i} href={v.link}>{v.name}</Nav.Link>
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