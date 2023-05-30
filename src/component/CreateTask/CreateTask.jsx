import { useState } from 'react'
import './CreateTask.scss'
function CreateTask() {
  const [isStudy, setIsStudy] = useState(true);
  const [isWork, setIsWork] = useState(false);
  const [isOther, setIsOther] = useState(false);
  function onTypeClick(taskType) {
    switch (taskType) {
      case 'study':
        setIsStudy(true);
        setIsWork(false);
        setIsOther(false);
        break;
      case 'work':
        setIsWork(true)
        setIsStudy(false);
        setIsOther(false);
        break;
      case 'other':
        setIsOther(true);
        setIsStudy(false);
        setIsWork(false);
        break;
    }
  }
  return (
    <div className='task'>
      <div className="task__buttons">
        <button onClick={() => onTypeClick('study')} className={`task__study ${isStudy ? 'active' : ''}`}></button>
        <button onClick={() => onTypeClick('work')} className={`task__work ${isWork ? 'active' : ''}`}></button>
        <button onClick={() => onTypeClick('other')} className={`task__other ${isOther ? 'active' : ''}`}></button>
      </div>
      <input className='task__text' type="text" placeholder='What is your task?' />
      <button className='task__add'>
        <img width={'26px'} src="/done.svg" alt="" />
      </button>
    </div>
  )
}
export default CreateTask