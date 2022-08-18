import React, { useState } from 'react'
import { AddTask } from './AddTask'
import { ListTask } from './ListTask'
import './Todo.css'

const Todo = () => {
    const [tasks,setTask]=useState([       
    ])
    const addTask =(title)=>{
     const newTask =[...tasks,{title}]
     setTask(newTask)

    }
    const remove =(index)=>{
        const newTask = [...tasks]
        newTask.splice(index,1)
        setTask(newTask)
    }
    return (
        <div className='todo-container'>
           
               <div className='header'>Todo App</div>
               <div>
                <AddTask addTask={addTask}/>
               </div>
               <div className='task'>
                {tasks.map((task,index)=>{
                   return  <ListTask task={task} 
                   removeTask={remove}
                   index={index}
                   />

                })}
               </div>
        </div>
    )
}
export default Todo