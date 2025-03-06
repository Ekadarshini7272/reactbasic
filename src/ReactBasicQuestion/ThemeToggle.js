import React,{useEffect, useState} from "react";

const ThemeToggle = () => {
      const [isMode, setIsMode] = useState(false);
      function handleThemeToggle() {
       setIsMode((prevState) => !prevState)
      }
      useEffect(() => {
       document.body.style.backgroundColor=isMode? "black" : "red";
       document.body.style.color=isMode? "white": "yellow";
      },[isMode]);
    return(
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>{isMode? "Dark Mode is On" : "Light Mode is On"}</h2>
            <button onClick={handleThemeToggle}>{isMode? "Switch to Light Mode": "Switch to dark Mode"}</button>
        </div>
    );
};
export default ThemeToggle;