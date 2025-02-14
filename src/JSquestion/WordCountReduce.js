import React,{useState} from 'react';
const WordCountReduce = () => {
    const [inputValue, setInputValue] = useState("");
    const [countWord, setCountWord] = useState("");
    function CountWord() {
        let inputField = inputValue;
        let convertStringToSentence = inputField.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);
        let wordCount = convertStringToSentence.reduce((acc, words) => {
            acc[words] = (acc[words] || 0) + 1
            return acc
        }, {})
        setCountWord(JSON.stringify(wordCount, null));
    }
    return (
        <>
        <textarea placeholder='Enter sentence' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
        <button onClick={CountWord}>Submit</button>
        <h3>{countWord}</h3>
        </>
    );
};
export default WordCountReduce;