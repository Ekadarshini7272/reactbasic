import React,{useState} from "react";

const ToDoList = ({myTaskList}) => {
    return(
        <>
        <h3>Today's Task Lists</h3>
        <ul>
           {myTaskList.map((task, index) => (
            <li key={index}>{task}</li>
           ))} 
        </ul>
        </>
    );
};
export default ToDoList;