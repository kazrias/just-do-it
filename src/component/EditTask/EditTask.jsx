import './EditTask.scss'
function EditTask({ onEditComplete, setTaskToEdit, taskToEdit, setEditIsActive, editWarning, setEditWarning }) {

  function onEnterClick(e) {
    if (e.key === 'Enter') {
      onEditComplete()
    }
  }
  function onEscDown(e) {
    if (e.key === 'Escape')
      setEditIsActive(false)
  }
  return (
    <div className='edit-task__wrapper'>

      <div className="edit-modal">
        <div className='create-task'>
          <div className="create-task__buttons">
            <button onClick={() => setTaskToEdit({ ...taskToEdit, type: 'study' })} className={`create-task__study ${taskToEdit.type === 'study' ? 'active' : ''}`}></button>
            <button onClick={() => setTaskToEdit({ ...taskToEdit, type: 'work' })} className={`create-task__work ${taskToEdit.type === 'work' ? 'active' : ''}`}></button>
            <button onClick={() => setTaskToEdit({ ...taskToEdit, type: 'other' })} className={`create-task__other ${taskToEdit.type === 'other' ? 'active' : ''}`}></button>
          </div>
          <input className='create-task__text create-task__text_edit' onKeyDown={(e) => { onEscDown(e); onEnterClick(e) }} onChange={(e) => setTaskToEdit({ ...taskToEdit, text: e.target.value })} type="text" value={taskToEdit.text || ''} />
        </div>
        <div className="edit-task__btns edit-task__btns_warning">
          {editWarning ? <p className='edit-task__warning'>Tasks should contain 3 to 55 letters!</p> : ''}
          <button onClick={onEditComplete} className='edit-task__done'>
            Done
          </button>
          <button onClick={() => { setEditWarning(false); setEditIsActive(false) }} className='edit-task__cancel'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditTask
