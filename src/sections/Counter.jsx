import "./style.css";
import Container from 'react-bootstrap/Container';
import CountUp from "react-countup";

const CounterSec = () => {
    return (
        <div className="main-service">
            <Container className="service-container">
                <div className="counter-div">
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1 >
                            <CountUp
                                end={5}
                                duration={2}
                            />+
                        </h1>
                        <p>Specialist Teams</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1>
                            <CountUp
                                end={2000}
                                duration={5}
                            />+
                        </h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1>
                            <CountUp
                                end={200}
                                duration={5}
                            />+
                        </h1>
                        <p>Team Of</p>
                    </div>
                    <div className="middle-line"></div>
                    <div className="numbers-div" data-aos-duration="700" data-aos="zoom-in-up">
                        <h1>
                            <CountUp
                                end={2015}
                                duration={5}
                                scrollSpyDelay={0}
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