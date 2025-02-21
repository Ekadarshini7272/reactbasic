import React,{useState} from 'react';

const UniqueChar =()=> {
    const [inputValue, setInputValue] = useState("");
    const [uniqueChar, setUniqueChar] = useState([]);

    function handleUniqueChar() {
        let inputStr = inputValue;
        let charStr = {};
        for (let char of inputStr){
            charStr[char] = (charStr[char] || 0) +1
        }
        for (let char of inputStr){
            if(charStr[char] === 1){
                setUniqueChar(`This is the first unique char: ${char}`)
                return
            }
        }
         setUniqueChar("There is no unique char")
    }
    return(
        <>
        <input type="text" placeholder='Enter String' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handleUniqueChar}>Submit</button>
        <h3>{uniqueChar}</h3>
        </>
    )
}
export default UniqueChar;