import "./style.css";
import Container from 'react-bootstrap/Container';
//Languages
import C from "../assets/Technologies/Language/C.png";
import Java from "../assets/Technologies/Language/Java.webp";
import Js from "../assets/Technologies/Language/Js.png";
import Kotlin from "../assets/Technologies/Language/Kotlin.png";
import php from "../assets/Technologies/Language/php.png";
import Python from "../assets/Technologies/Language/Python.png";
import swift from "../assets/Technologies/Language/swift.png";

//Framwork
import Angular from "../assets/Technologies/Framework/Angular.png";
import flutter from "../assets/Technologies/Framework/flutter.png";
import magneto from "../assets/Technologies/Framework/magneto.png";
import React from "../assets/Technologies/Framework/React.png";
import nest from "../assets/Technologies/Framework/nest.png";
import vue from "../assets/Technologies/Framework/vue.png";
import Wordpress from "../assets/Technologies/Framework/Wordpress.png";

//Database
import Postgre from "../assets/Technologies/Database/Postgre.png";
import realm from "../assets/Technologies/Database/realm.png";
import mysql from "../assets/Technologies/Database/mysql.png";
import core from "../assets/Technologies/Database/core.png";
import firebase from "../assets/Technologies/Database/firebase.png";
import mongo from "../assets/Technologies/Database/mongo.png";
import elasticsearch from "../assets/Technologies/Database/elasticsearch.svg";
import SvgComponent from "../components/SvgComponent";

const TechnologiesSec = () => {
    const animationDuration = 1000;
    const animationType = "zoom-in";
    return (
        <div className="main-service main-technologies">
            {/* <h1 className="main-service-hd mt-3">Technologies we work with</h1> */}
            <div className="main-service-hd-1">
                <h1 className="main-procedure-hd ">
                    Technologies we work with
                </h1>
                <SvgComponent />
            </div>
            <Container className="service-container mt-5">
                <div className="technologies-1">
                    <div className="tech-hd">
                        <button className="hd-btn">
                            Languages
                        </button>
                    </div>
                    <div className="technology">
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={C} alt="" className="images-tech" />
                            <p>C#</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={Java} alt="" className="images-tech" />
                            <p>Java</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={Js} alt="" className="images-tech" />
                            <p>Js</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={Kotlin} alt="" className="images-tech" />
                            <p>Kotlin</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={php} alt="" className="images-tech" />
                            <p>php</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={Python} alt="" className="images-tech" />
                            <p>Python</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={swift} alt="" className="images-tech" />
                            <p>swift</p>
                        </div>
                    </div>
                </div>
                <div className="technologies-1">
                    <div className="tech-hd">
                        <button className="hd-btn">
                            Frameworks
                        </button>
                    </div>
                    <div className="technology">
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={Angular} alt="" className="images-tech" />
                            <p>Angular</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={flutter} alt="" className="images-tech" />
                            <p>Flutter</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={magneto} alt="" className="images-tech" />
                            <p>Magnetto</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={nest} alt="" className="images-tech" />
                            <p>Nest</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={React} alt="" className="images-tech" />
                            <p>React</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={vue} alt="" className="images-tech" />
                            <p>Vue</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={Wordpress} alt="" className="images-tech" />
                            <p>WordPress</p>
                        </div>
                    </div>
                </div>
                <div className="technologies-1">
                    <div className="tech-hd">
                        <button className="hd-btn">
                            Database
                        </button>
                    </div>
                    <div className="technology">
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={core} alt="" className="images-tech" />
                            <p>core</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={elasticsearch} alt="" className="images-tech" />
                            <p>Elastic Search</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={firebase} alt="" className="images-tech" />
                            <p>FireBase</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={mongo} alt="" className="images-tech" />
                            <p>Mongo</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={mysql} alt="" className="images-tech" />
                            <p>MySQL</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={Postgre} alt="" className="images-tech" />
                            <p>Postgre</p>
                        </div>
                        <div data-aos-duration={animationDuration} data-aos={animationType} className="tech">
                            <img src={realm} alt="" className="images-tech" />
                            <p>realm</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default TechnologiesSec;