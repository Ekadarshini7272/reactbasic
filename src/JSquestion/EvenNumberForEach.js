import React, {useState} from  'react';

const EvenNumberForEach = () => {
    const [inputNumber, setInputNumber] = useState("");
    const [evenNumber, setEvenNumber] = useState("");

    function EvenNumber() {
        let inputFieldValue = inputNumber;
        let numberToSetArray = inputFieldValue.split(",").map(num => parseInt(num.trim(), 10))
        let resultEvenNumber = [];
        numberToSetArray.forEach(num => {
            if (num % 2 === 0) {
                resultEvenNumber.push(num); 
            }
        });
        setEvenNumber(resultEvenNumber.join(", "))
    }
    return (
        <>
        <h1>Even number using foreach loop</h1>
        <input type="text" placeholder='Enter number' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)}/>
         <button onClick={EvenNumber}>Submit</button>
         <h3>{evenNumber}</h3>
        </>
    )
};
export default EvenNumberForEach;