 import React from 'react'
 import { FaPlus } from "react-icons/fa";

 const Additem = ({newItem, setNewItem,  handleSubmit}) => {
  return (
   <form className='addForm'onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Task</label>
        <input type="text"
               id ='addItem'
               placeholder='Add task'
               autoFocus 
               required
               value={newItem}
               onChange={(e)=> setNewItem(e.target.value)}
         />
         <button 
               type='submit'
               aria-label ='Add Task'
         >
            <FaPlus />
         </button>
   </form>

  )
}
export default Additem