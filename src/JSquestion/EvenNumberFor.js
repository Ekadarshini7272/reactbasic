import React, {useState} from 'react';
const EvenNumberFor = () => {
    const [inputValue, setInputValue] = useState("");
    const [evenNumber, setEvenNumber] = useState("");

    function EvenNumberList() {
     let inputNumber = inputValue;
     let convertStringToArray = inputNumber.split(",").map(num => parseInt(num.trim(), 10));
     let EvenNumberForLoop = [];
     for (let i = 0; i < convertStringToArray.length; i++) {
        if(convertStringToArray[i] % 2 === 0) {
            EvenNumberForLoop.push(convertStringToArray[i])
        };
     };
     setEvenNumber(EvenNumberForLoop.join(", "))
    }
    return (
        <>
        <h1>All Even number from and given Array using For loop</h1>
        <input type="text" placeholder='Enter number comma-separated' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={EvenNumberList}>Submit</button>
        <h3>{evenNumber}</h3>
        </>
    );
};
export default EvenNumberFor;