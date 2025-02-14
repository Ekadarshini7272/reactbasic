import React, {useState} from 'react';
const WordCountForEach = () => {
    const [inputValue, setInputValue] = useState("");
    const [countWord, setCountWord] = useState("");
    function WordCountEvent () {
        let inputField = inputValue;
        let convertToCount = inputField.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);
        let countWordsFromSentence = {};
        convertToCount.forEach(word => {
            if(word) {
                countWordsFromSentence[word] = (countWordsFromSentence[word] || 0)+1 
            }
        });
        setCountWord(JSON.stringify(countWordsFromSentence, null));
    }
    return (
        <>
        <h1>Word Count using for each loop</h1>
        <textarea type="text" placeholder='Enter the sentence...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
        <button onClick={WordCountEvent}>Submit</button>
        <h6>{countWord}</h6>
        </>
    );
};
export default WordCountForEach;