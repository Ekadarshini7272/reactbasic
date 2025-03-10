import React, {useState} from "react";

const AddTaskForm = ({onAddTask}) => {
    const [task, setTask] = useState("");
    
    const handleTaskSumbit = (e) => {
        e.preventDefault();
        onAddTask(task);
        if (!task.trim()) return;
        setTask("");
    }
    return (
        <>
        <h2>Add you Today task</h2>
        <form onSubmit={handleTaskSumbit}>
            <input type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Sumit</button>
        </form>
        </>
    );
};
export default AddTaskForm;