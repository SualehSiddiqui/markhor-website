import "./style.css";
import Container from 'react-bootstrap/Container';
import { GiGraduateCap } from "react-icons/gi";
import { FaPrescriptionBottle, FaPaperPlane } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProcedureSec = () => {
    return (
        <div className="main-service main-project">
            <div className="main-service-hd-1 main-project-hd-1">
                <h1
                    className="main-procedure-hd main-project-hd"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="700"

                >
                    How To Start?
                </h1>
            </div>
            <Container className="service-container procedure-container d-flex">
                <div className="service-card-div procedure-card-div">
                    <div data-aos-duration="700" data-aos="zoom-in-up" className="procedure-card d-flex p-4">
                        <div className="icon-div">
                            <div className="sub-icon-div">
                                01
                            </div>
                            <GiGraduateCap size={100} />
                        </div>
                        <div className="procedure-text-div p-3">
                            <h4>Got an idea?</h4>
                            <p>Let's discuss and plan it out</p>

                        </div>
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in-up" className="procedure-card d-flex p-4">
                        <div className="icon-div">
                            <div className="sub-icon-div">
                                02
                            </div>
                            <FaPrescriptionBottle size={60} />
                        </div>
                        <div className="procedure-text-div  p-3">
                            <h4>Initiate Design</h4>
                            <p>Brining your imagination to life</p>
                        </div>
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in-up" className="procedure-card d-flex p-4">
                        <div className="icon-div">
                            <div className="sub-icon-div">
                                03
                            </div>
                            <FaPaperPlane size={50} />
                        </div>
                        <div className="procedure-text-div p-3">
                            <h4>All set to Launch</h4>
                            <p>Let’s mark the beginning of something big</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={'tel:++923183253219'} className="contact-now-link">
                        <Button variant="primary" className="contact-submit contact-now-button" type="submit">
                            <FaPhoneAlt className="me-2" size={22} />
                            Contact Now
                        </Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
};

export default ProcedureSec;