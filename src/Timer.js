import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState(0);  // Stores user input for timer in minutes
  const [timeLeft, setTimeLeft] = useState(0);          // Stores time left in seconds
  const [isRunning, setIsRunning] = useState(false);    // Indicates if the timer is running
  const [isPaused, setIsPaused] = useState(false);      // Indicates if the timer is paused

  useEffect(() => {
    let timer;
    // If the timer is running, not paused, and there's time left, start the countdown
    if (isRunning && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);  // Stop the timer once it reaches 0
            setIsRunning(false);   // Stop running once timer hits 0
            return 0;
          }
          return prevTime - 1;  // Decrease time left by 1 every second
        });
      }, 1000);
    }

    // Cleanup function to clear the interval when the component unmounts or state changes
    return () => clearInterval(timer);
  }, [isRunning, isPaused, timeLeft]);

  // Handle input changes when the user sets a timer in minutes
  const handleInputChange = (e) => {
    setInputMinutes(e.target.value);  // Update inputMinutes state with the user's input
  };

  // Start or resume the timer
  const handleStart = () => {
    if (timeLeft === 0 && inputMinutes > 0) {
      setTimeLeft(inputMinutes * 60);  // Convert inputMinutes to seconds and set timeLeft
    }
    setIsRunning(true);   // Start or resume the timer
    setIsPaused(false);    // Ensure it's not paused
  };

  // Pause the timer
  const handlePause = () => {
    setIsPaused(true);     // Set isPaused to true, stopping the countdown
    setIsRunning(false);   // Stop the running timer
  };

  // Reset the timer
  const handleReset = () => {
    setIsRunning(false);   // Stop the timer
    setIsPaused(false);    // Unpause the timer
    setTimeLeft(0);        // Reset timeLeft to 0
    setInputMinutes(0);    // Clear the input field as well
  };

  // Convert seconds into minutes and seconds for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <h1>{timeLeft > 0 ? formatTime(timeLeft) : "00:00"}</h1>  {/* Display the time left or 00:00 if finished */}
      
      {/* Input field for user to enter the time in minutes */}
      <input
        placeholder="Enter your time in minutes"
        type="number"
        value={inputMinutes}
        onChange={handleInputChange}
      />
      
      {/* Show Start/Resume button if timer is not running or is paused */}
      {!isRunning || isPaused ? (
        <Button onClick={handleStart}>
          {timeLeft === 0 ? 'Start' : 'Resume'}
        </Button>
      ) : (
        <Button onClick={handlePause}>Pause</Button>  // Show Pause button if timer is running
      )}
      
      <Button onClick={handleReset}>Reset</Button>  {/* Reset button to reset the timer */}
    </>
  );
};

export default Timer;
