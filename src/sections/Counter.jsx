import "./style.css";
import Container from 'react-bootstrap/Container';
// import CounterComp from "react-CounterComp";
import CounterComp from '../components/Counter';
import { FaClockRotateLeft, FaCheck  } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";


const CounterSec = () => {

    return (
        <div className="main-service ">
            <Container className="service-container">
                <div className="counter-div">
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1><AiOutlineTeam /></h1>
                        <h1 >
                            <CounterComp
                                end={4}
                                duration={5}
                            />
                        </h1>
                        <p>Specialist Teams</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1><FaCheck /></h1>
                        <h1>
                            <CounterComp
                                end={1000}
                                duration={5}
                                afterText="+"
                                separator=""
                            />
                        </h1>
                        <p>Successfull Projects</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1><IoPersonOutline /></h1>
                        <h1>
                            <CounterComp
                                end={100}
                                duration={5}
                                afterText="+"
                            />
                        </h1>
                        <p>Workers</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1><FaClockRotateLeft /></h1>
                        <h1>
                            <CounterComp
                                end={2022}
                                duration={5}
                                scrollSpyDelay={0}
                                separator=""
                            />
                        </h1>
                        <p>Working From</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CounterSec;