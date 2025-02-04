import React, {useState, useEffect} from 'react';
const CalculateSquare = () => {
    const [count, setCount] = useState(10);
    const [calculate, setCalculate] = useState(0);
    useEffect(()=> {
        setCalculate(count*count)
    }, [count]);
    function ButtonClick(){
        if(count > 0){
      setCount((c)=> c - 1)
        }
    }
    return(
        <>
        <h3>Count: {count}</h3>
        <button onClick={ButtonClick} disabled={count === 0}>Select</button>
        <h4>Calculation: {calculate}</h4>
       {count === 0 && <p style={{color: "red"}}>Counter stop</p>}
        </>
    );
};
export default CalculateSquare;