import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap'

const CountingStopper = () => {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
//To show the effect after component render the each 100 milisecond count data will increase if isCounting is true
useEffect(() => {
    let timer;
    if (isCounting) {
        timer = setInterval (() => {
            setCount(prevCount => prevCount + 1)
        }, 100)
    } else {
        clearInterval(timer);
    }
    return () => clearInterval(timer);
}, [isCounting]);

const handleStart = () => {
    setIsCounting(true);
};
const handlePause =() => {
    setIsCounting(false);
};

    return(
    <>
    <h3>{count}</h3>
    <Button onClick={handleStart}>Start</Button>
    <Button onClick={handlePause}>Pause</Button>
    </>
    );
};
export default CountingStopper;