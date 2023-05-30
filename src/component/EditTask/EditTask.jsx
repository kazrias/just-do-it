import { useState } from 'react'
import './EditTask.scss'
function EditTask({ onEditComplete, setTaskToEdit, taskToEdit }) {
  function onEnterClick(e) {
    if (e.key === 'Enter') {
      onEditComplete()
    }
  }
  return (
    <div className='edit-task'>
      <input onKeyDown={onEnterClick} onChange={(e) => setTaskToEdit({ ...taskToEdit, text: e.target.value })} type="text" value={taskToEdit.text || ''} />
    </div>
  )
}
export default EditTask