import React from 'react';

const flattenArray = (arr) => {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
  },[])
}

const NestedList =()=> {
    const nestedArray = ["John", ["Emma", "Sophia"], ["Liam", ["Noah", "Olivia"]], "Ava"];
    const flatData = flattenArray(nestedArray);
    return(
        <>
        <h1>Nested Array to Flatten using Recursive</h1>
        {flatData.map((name, index) => (
           <h2 key={index}>{name}</h2> 
        ))}
        </>
    );
};
export default NestedList;