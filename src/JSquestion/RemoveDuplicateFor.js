import React,{useState} from "react";
const RemoveDuplicateFor = () => {
    const [inputValue, setInputValue] = useState([]);
    const [removeDuplicateArray, setRemoveDuplicateArray] = useState([]);

    function handleDuplicateArray() {
        let inputField = inputValue;
        console.log("input", inputField);
        let convertToArray = inputField.split(",").map(num => num.trim());
        console.log("Arraysplit", convertToArray)
        let uniqueArray = [];
        for(let i=0; i< convertToArray.length; i++) {
            if(!uniqueArray.includes(convertToArray[i])){
                uniqueArray.push(convertToArray[i])
            }
        }
        setRemoveDuplicateArray(uniqueArray.join(", "));
        console.log("resu", uniqueArray);
    }
    return(
        <>
        <input type="text" placeholder="Enter your word" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleDuplicateArray}>Submit</button>
        <h3>{removeDuplicateArray}</h3>
        </>
    );
};
export default RemoveDuplicateFor;