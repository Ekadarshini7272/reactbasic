 import React, {useState, useEffect} from 'react';
 const Counter = () =>{
    const [count, setCount] = useState(0);
    const [calculate, setCalculate] = useState(0);

    useEffect(()=>{
        setCalculate(count*2)
    }, [count]);

    // function ButtonSelect () {
    //     setCount((c) => c + 1)
    // }
    return(
        <>
        <h3>Count: {count}</h3>
        {/* <button onClick={ButtonSelect}>Select</button> */}
        <button onClick={() => setCount((c)=> c + 1)}>Select</button>
        <h4>{calculate}</h4>
        </>
    );
 };
 export default Counter;