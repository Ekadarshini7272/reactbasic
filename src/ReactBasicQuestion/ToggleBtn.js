import React, {useState} from 'react';
const ToggleBtn =()=> {
    const [isButton, setIsButton] = useState(false);
    function handleToggleEvent(){
        setIsButton((prevState) => !prevState)
    }
    return(
        <>
        <h2>Switch the Light on off</h2>
        <button onClick={handleToggleEvent} style={{backgroundColor: isButton? "green" : "yellow"}}>{isButton? "ON" : "OFF"}</button>
        </>
    );
};
export default ToggleBtn;