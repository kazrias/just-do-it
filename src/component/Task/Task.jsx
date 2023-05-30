import { useState } from 'react'
import './Task.scss'
function Task({ task, text, type, completed, id, onTaskComplete,onEditClick, onTaskDelete }) {
  const [done, setDone] = useState(false);
  return (
    <div className={`task ${completed ? 'task_completed' : ''}`}>
      <div className="task__main">
        <div className={`task__type task__type_${type}`}></div>
        <div className="task__text">{text}</div>
      </div>
      <div className="task__functionality">
        <div onClick={() => { onTaskComplete(task); setDone(!done) }} className='task__functionality-done'>
          <svg className={`task__functionality-check ${done ? 'active' : ''}`} viewBox="0 0 24 24">
            <path d="M4.1 12.7L9 17.6 20.3 6.3" fill="none" />
          </svg>
        </div>
        <img onClick={() => onEditClick(task)} className='task__functionality-edit' width={'20px'} src="./edit.svg" alt="" />
        <img onClick={() => onTaskDelete(id)} className='task__functionality-delete' width={'26px'} src="./delete.svg" alt="" />
      </div>
    </div>
  )
}
export default Task