import React, {useState} from 'react';

const EvenNumber = () => {
    const [inputNumber, setInputNumber] = useState("");
    const [evenNumber, setEvenNumber] = useState("");
    function FilterEvenNumber() {
        let inputFieldValue = inputNumber;
        let numberToSetArray = inputFieldValue.split(",").map(num => parseInt(num.trim(), 10));
        let FilterEvenNumber = numberToSetArray.filter(num => num % 2 === 0);
        setEvenNumber(FilterEvenNumber.join(", "))
    }
    return (
        <>
        <h1>Filter even number</h1>
        <input placeholder='Enter your number' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)}/>
        <button onClick={FilterEvenNumber}>Filter</button>
        <h5>Even number: {evenNumber}</h5>
        </>
    );
};
export default EvenNumber;