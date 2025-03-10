import React,{useState, useEffect} from "react";
import AddTaskForm from "./AddTaskForm";
import ToDoList from "./ToDoList";

const ToDoApp = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
      setTasks([...tasks, newTask])
    }
    return(
        <>
         <AddTaskForm onAddTask = {handleAddTask}/>
         <ToDoList myTaskList = {tasks}/>
        </>
    );
};
export default ToDoApp;