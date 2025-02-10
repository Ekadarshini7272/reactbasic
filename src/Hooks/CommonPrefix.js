import React, {useState} from 'react';

const groupByCommonPrefix = (words) => {
  words.sort()
  let groups = []
  let currentGroup = []
  for (let i = 0; i < words.length; i++) {
    if (currentGroup.length === 0){
      currentGroup.push(words[i]);
    } else {
      let prefix = findCommonPrefix(currentGroup[0], words[i]);
      if (prefix.length > 0) {
        currentGroup.push(words[i]);
      } else {
        groups.push([...currentGroup])
        currentGroup = [words[i]]
      }
    }
  }
  if (currentGroup.length > 0) groups.push([...currentGroup]);
  return groups;
};

const findCommonPrefix = (word1, word2) => {
  let prefix = "";
  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    if(word1[i] === word2[i]) {
     prefix += word1[i];
    } else {
      break;
    }
  };
  return prefix;
};

const WordGrouping =()=> {
  const [words] = useState(["flower", "flow", "flight", "dog"]);
  const groupedWords = groupByCommonPrefix(words)
  return(
    <>
    <h2>Grouping common prefix</h2>
    {groupedWords.map ((group, index) => (
      <p key={index}>{group.join (", ")}</p>
    ))}
    </>
  );
};
export default WordGrouping;