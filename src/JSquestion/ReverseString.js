import React, {useState} from 'react';
const ReverseString = () => {
    const [inputField, setInputField] = useState("");
    const [reverseWord, setReverseWord] = useState("");
    function handleReverseString() {
        let inputValue = inputField;
        console.log("input", inputValue);
        let reverseString = "";
        console.log("reverse", reverseString)
        for(let i = inputValue.length -1; i>= 0; i--) {
            reverseString += inputValue[i]
        }
        setReverseWord(reverseString);
        console.log("result", reverseString)
    }
    return(
        <>
        <input type="text" placeholder='Enter your word' value={inputField} onChange={(e) => setInputField(e.target.value)}/>
        <button onClick={handleReverseString}>Submit</button>
        <h3>{reverseWord}</h3>
        </>
    );
};
export default ReverseString;