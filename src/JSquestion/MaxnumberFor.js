import React, {useState} from 'react';
const MaxnumberFor = () => {
    const [inputValue, setInputValue] = useState("");
    const [maxNum, setMaxNum] = useState("");

    function HandleMaxNumFor() {
        let inputNumber = inputValue;
        let convertToArray = inputNumber.split(",").map(num => parseFloat(num.trim()));
        if (convertToArray.length === 0 || convertToArray.some(isNaN)){
            setMaxNum("Please Enter valid number"); 
            return;
        }
        let findMaxNum = convertToArray[0];
       for(let i = 1; i < convertToArray.length; i++) {
        if(convertToArray[i] > findMaxNum) {
            findMaxNum = convertToArray[i]
        };
       };
       setMaxNum(findMaxNum);
    }
    return (
        <>
     <input placeholder='Enter number' value={inputValue} onChange={(e) => e.target.value}/>
     <button onClick={HandleMaxNumFor}>Submit</button>
     <h3>{maxNum}</h3>
        </>
    );
};
export default MaxnumberFor;