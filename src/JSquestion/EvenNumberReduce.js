import React, {useState} from 'react';
const EvenNumberReduce = () => {
    const [inputNumber, setInputNumber] = useState("");
    const [evenNumbers, setEvenNumbers] = useState("");

    function ReduceEvenNumber () {
        let inputValue = inputNumber;
        let convertStringToArray = inputValue.split(",").map(num => parseInt(num.trim(), 10));
        let evenNumberList = convertStringToArray.reduce((acc, num) => {
            if(num % 2 === 0) {
                acc.push(num)
            }
            return acc;
        }, []);
        // this is sorting for descending order this is optional
        evenNumberList.sort((a, b) => b - a);
        //set the even number to show in UI with , separated
        setEvenNumbers(evenNumberList.join(", "));
    }
    return (
        <>
        <h1>All Even number from and given Array using reduce</h1>
        <input type="text" placeholder='Enter number comma-separated' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)}/>
        <button onClick={ReduceEvenNumber}>Submit</button>
        <h1>{evenNumbers}</h1>
        </>
    );
};
export default EvenNumberReduce;