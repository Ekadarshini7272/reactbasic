import React,{useState} from 'react';
const MergeSortArrayWhile = () => {
    const [inputa, setInputa] = useState("");
    const [inputb, setInputb] = useState("");
    const [mergeArray, setMergeArray] = useState([]);
    function handleMergeArray() {
     let array1 = inputa.split(",").map(num=> parseInt(num.trim()));
     let array2 = inputb.split(",").map(num=> parseInt(num.trim()));
     setMergeArray(mergeSortArray(array1, array2).join(", "))
    }
    const mergeSortArray =(array1, array2)=> {
        let i=0;
        let j=0;
        let mergingArray = [];
        while(i<array1.length && j<array2.length){
            if(array1[i] < array2[j]){
                mergingArray.push(array1[i])
                i++
            } else {
                mergingArray.push(array2[j])
                j++
            }
        };
        while(i< array1.length) {
            mergingArray.push(array1[i])
            i++
        };
        while(j< array2.length) {
            mergingArray.push(array2[j])
            j++
        };
        return mergingArray;
    }
    return(
        <>
        <input type="text" placeholder='Enter number comma separated' value={inputa} onChange={(e) => setInputa(e.target.value)}/>
        <input type="text" placeholder='Enter number comma separated' value={inputb} onChange={(e) => setInputb(e.target.value)}/>
        <button onClick={handleMergeArray}>Submit</button>
        <h3>{mergeArray}</h3>
        </>
    )
}
export default MergeSortArrayWhile;