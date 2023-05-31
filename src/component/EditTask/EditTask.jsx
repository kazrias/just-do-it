import './EditTask.scss'
function EditTask({ onEditComplete, setTaskToEdit, taskToEdit }) {

  function onEnterClick(e) {
    if (e.key === 'Enter') {
      onEditComplete()
    }
  }
  return (
    <div className='edit-task__wrapper'>

      <div className="edit-modal">
        <div className='create-task'>
          <div className="create-task__buttons">
            <button onClick={() => setTaskToEdit({ ...taskToEdit, type: 'study' })} className={`create-task__study ${taskToEdit.type==='study' ? 'active' : ''}`}></button>
            <button onClick={() => setTaskToEdit({ ...taskToEdit, type: 'work' })} className={`create-task__work ${taskToEdit.type==='work' ? 'active' : ''}`}></button>
            <button onClick={() => setTaskToEdit({ ...taskToEdit, type: 'other' })} className={`create-task__other ${taskToEdit.type==='other' ? 'active' : ''}`}></button>
          </div>
          <input className='create-task__text create-task__text_edit' onKeyDown={onEnterClick} onChange={(e) => setTaskToEdit({ ...taskToEdit, text: e.target.value })} type="text" value={taskToEdit.text || ''} />
          <button onClick={onEditComplete} className='create-task__add'>
            <img width={'26px'} src="/done.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditTask
