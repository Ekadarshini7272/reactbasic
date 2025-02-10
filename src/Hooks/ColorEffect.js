import React, {useState, useEffect} from 'react';
const ColorEffect = () => {
    const [count, setCount] = useState(0);
    const [square, setSquare] = useState(0);
    const [bgColor, setBgColor] = useState(0);
     function Incrementbtn(){
        setCount((c) => c+1)
     };
     function Decrementbtn() {
        setCount((c) => c-1)
     }
return(
    <>
    <button onClick={Incrementbtn}>Decrement</button>
    <h6>{count}</h6>
    <button onClick={Decrementbtn}>Increment</button>
    <h4>square {square}</h4>
    </>
)
};
export default ColorEffect;