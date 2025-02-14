import React, {useState} from 'react';

const WordCountFor = () => {
    const [inputValue, setInputValue] = useState("");
    const [countWord, setCountWord] = useState("");

    function CountWordEventFor () {
        let inputField = inputValue;
        let convertStringToSentence = inputField.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);
        let wordCounts = {}
        for (let i = 0; i< convertStringToSentence.length; i++){
            let words = convertStringToSentence[i]
            wordCounts[words] = (wordCounts[words] || 0) + 1
        }
        setCountWord(JSON.stringify(wordCounts, null))
    }
    return (
        <>
        <textarea placeholder='Entersentence' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
        <button onClick={CountWordEventFor}>Submit</button>
        <h3>{countWord}</h3>
        </>
    );
};
export default WordCountFor;