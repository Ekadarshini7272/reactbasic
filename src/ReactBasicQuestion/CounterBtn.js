import React,{useState} from 'react';
const Counter =()=> {
    const [count, setCount] = useState(0)
    function Increment(){
        if(count < 10) {
            setCount(count + 1)
        }
    }
    function Decrement(){
        if(count > 0){
        setCount(count - 1)
        }
    }
    function Reset(){
        setCount(0)
    }
    return(
        <>
        <h1>Counter Button</h1>
        <button onClick={Increment}>+</button>
        <h5>{count}</h5>
        <button onClick={Decrement}>-</button>
        <button onClick={Reset}>Reset</button>
        </>
    );
};
export default Counter;