import React, {useState} from 'react';

const RemoveDuplicateSet =()=> {
    const [inputValue, setInputValue] = useState("");
    const [uniqueNumber, setUniqueNumber] = useState([]);

    function handleUniqueData() {
        let inputField = inputValue;
        let convertFormat = inputField.split(",").map(num => num.trim());
        let uniqueDataArray = [...new Set(convertFormat)];
        setUniqueNumber(uniqueDataArray.join(", "));
    }

    return(
        <>
        <input type='text' placeholder='Enter number' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleUniqueData}>Submit</button>
        <h3>{uniqueNumber}</h3>
        </>
    );
};
export default RemoveDuplicateSet;