import React, {useState, useEffect} from 'react';
const SquareCalculate = () => {
    const [count, setCount] = useState(10);
    const [square, setSquare] = useState(100);
    const [bgColor, setBgcolor] = useState('');
    useEffect(() => {
        setSquare(count * count)
        
        if(count > 5){
            setBgcolor("green");
        } else if (count >= 1) {
            setBgcolor("yellow");
        } else {
            setBgcolor("red")
        };
    }, [count, bgColor])

    function Increment(){
        setCount((c) => c+1)
    }
    function Decrement(){
        setCount((c) => c-1)
    }
    function ResetCount(){
        setCount(10)
    }
    return(
        <>
        <h2>Counter with Square & Reset</h2>
        <button style= {{backgroundColor: bgColor}} onClick={Increment}>Increment</button>
        <h6>{count}</h6>
        <button style= {{backgroundColor: bgColor}} onClick={Decrement} disabled={count === 0}>Decrement</button>
        <button onClick={ResetCount}>Reset</button>
        <h4>Square: {square}</h4>
        {count === 0 && <p style={{color: "red"}}>Counter stpped</p>}
        </>
    );
};
export default SquareCalculate