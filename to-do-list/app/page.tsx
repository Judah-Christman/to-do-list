"use client"
import React, { Component, useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    // updates value of newTask in the input on submission
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTask(event.target.value);
    };

    // adds the newTask that was defined from the form submission to the tasks array
    const addTask = () =>{
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }
 
    // creates a new array called updatedTasks and sets it to copy tasks array filtering out the index of the undesireable item, then settin updatedTasks to tasks
    const removeTask = (index) =>{
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);

        

    }

    // decreases the index of item in tasks array
    const moveTaskUp = (index) =>{
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index-1]] = [updateTasks[index-1], updateTasks[index]];
            setTasks(updateTasks)
        }
    }

    // increases the index of item in tasks array
    const moveTaskDown = (index) =>{
        if(index < tasks.length -1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index+1]] = [updateTasks[index+1], updateTasks[index]];
            setTasks(updateTasks)
        }
    }


    return(
        <div className="w-full min-h-dvh">
            <h1 className="w-full text-5xl text-center text-[#f6f6f6] py-10">To-Do List</h1>
            <div className="w-full">
                <div className="w-full flex justify-center">
                    <input
                        className="w-3/4 md:w-1/3 p-2 border"
                    type="text"
                    placeholder="Submit Task..."
                    value={newTask}
                    onChange={handleInput} />
                    <button className="w-fit p-2 bg-green-400 rounded hover:bg-green-500" onClick={addTask}>ADD</button>
                </div>
            </div>

            <ul className="w-3/4 md:w-1/2 mx-auto my-3 text-gray-900">
                {tasks.map((task, index) =>
                    <li className="w-full p-5 my-2 border-black rounded-xl bg-[#f6f6f6] flex" key={index}>
                        <span className="w-fit flex-1">{task}</span>
                        <button className="text-red-500 hover:cursor-pointer mx-1" onClick={() => removeTask(index)}>Delete</button>
                        <button className="mx-1 hover:cursor-pointer hover:-translate-y-1" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="mx-1 hover:cursor-pointer hover:translate-y-1" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ul>

        </div>

    );
}
export default ToDoList