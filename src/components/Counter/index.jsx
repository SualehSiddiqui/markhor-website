import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CounterComp = (props) => {
    const { afterText } = props;
    const [counterOn, setCounerOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounerOn(true)} onExit={() => setCounerOn(false)}>
            {counterOn && <CountUp {...props} />}{afterText ? afterText : ""}
        </ScrollTrigger>
    )
}

export default CounterComp;