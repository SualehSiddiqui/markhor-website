import "./style.css";
import Container from 'react-bootstrap/Container';
// import CounterComp from "react-CounterComp";
import CounterComp from '../components/Counter';

const CounterSec = () => {

    return (
        <div className="main-service">
            <Container className="service-container">
                <div className="counter-div">
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
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
                        <h1>
                            <CounterComp
                                end={1000}
                                duration={5}
                                afterText="+"
                                separator=""
                            />
                        </h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1>
                            <CounterComp
                                end={100}
                                duration={5}
                                afterText="+"
                            />
                        </h1>
                        <p>Team Of</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1>
                            <CounterComp
                                end={2022}
                                duration={5}
                                scrollSpyDelay={0}
                                separator=""
                            />
                        </h1>
                        <p>Since</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CounterSec;