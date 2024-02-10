import "./style.css";
import Container from 'react-bootstrap/Container';
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaPrescriptionBottle, FaPaperPlane } from "react-icons/fa";

const ProcedureSec = () => {
    return (
        <div className="main-service">
            <h4 className="procedure-hd mt-3">Procedure</h4>
            <h1 className="main-procedure-hd">How To Start?</h1>
            <Container className="service-container d-flex">
                <div className="service-card-div">
                    <div data-aos-duration="700" data-aos="zoom-in-up" className="procedure-card d-flex p-4">
                        <div className="icon-div">
                            <GiGraduateCap size={100} />
                        </div>
                        <div className="text-div p-3">
                            <h4>Got an idea?</h4>
                            <p>Let's discuss and plan it out</p>
                        </div>
                    </div>
                    <div className="arrow-div">
                        <MdOutlineDoubleArrow size={30} />
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in-up" className="procedure-card d-flex p-4">
                        <div className="icon-div">
                            <FaPrescriptionBottle size={60} />
                        </div>
                        <div className="text-div p-3">
                            <h4>Initiate Design</h4>
                            <p>Brining your imagination to life</p>
                        </div>
                    </div>
                    <div className="arrow-div">
                        <MdOutlineDoubleArrow size={30} />
                    </div>
                    <div data-aos-duration="700" data-aos="zoom-in-up" className="procedure-card d-flex p-4">
                        <div className="icon-div">
                            <FaPaperPlane size={50} />
                        </div>
                        <div className="text-div p-3">
                            <h4>All set to Launch</h4>
                            <p>Let’s mark the beginning of something big</p>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
};

export default ProcedureSec;