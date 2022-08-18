import React, { useState } from 'react'

export const AddTask = ({addTask}) => {
    const [value,setValue]=useState('')
    function addItem(){
      addTask(value)
    setValue("")
    }
    
  return (
    <>
        <div className='input-container'>
            <input type="text" className='input' placeholder='Add a new task'
        value={value}    onChange={(e)=>{setValue(e.target.value);}} />
            <button className='add-btn' onClick={addItem} >Add</button>
        </div>
    </>
  )
}
