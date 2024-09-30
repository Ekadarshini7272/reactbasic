import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(()=> {
    let timer;
    if(isRunning && !isPaused && timeLeft > 0){
      timer = setInterval(()=> {
        setTimeLeft ((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setIsRunning(false);
            return 0;
          }
          return prevTime -1;
        })
      },1000);
    }
   return()=> clearInterval(timer)
  },[ isRunning, isPaused])

  const handleInputChange = (e) =>{
  setInputMinutes(e.target.value);
  };

  const handleStart = ()=> {
    if (timeLeft===0){
      setTimeLeft(inputMinutes*60)
    }
    setIsRunning(true);
    setIsPaused(false);
  }
  const handlePause =()=>{
    setIsPaused(true);
    setIsRunning(false);
  }
  const handleReset =()=>{
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(0);
  }
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs= (seconds % 60)
    return `${minutes.toString().padStart(2, '0')} : ${secs.toString().padStart(2, '0')}`
}

  return (
    <>
     <h1>{timeLeft > 0 ? formatTime(timeLeft) : "00.00"}</h1>
    <input 
    placeholder='Enter you time'
    type="number"
    value={inputMinutes}
    onChange={handleInputChange}
    />
    {!isRunning || isPaused ? (
    <Button onClick={handleStart}>
      {timeLeft === 0 ? 'Start' : 'Resume'}
    </Button>
   ) : (
    <Button onClick={handlePause}>Pause</Button>
    )}
    <Button onClick={handleReset}>Reset</Button>
    </>
  );
};
export default Timer;