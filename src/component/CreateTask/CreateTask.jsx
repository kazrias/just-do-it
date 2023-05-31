import { useState } from 'react'
import './CreateTask.scss'
function CreateTask({ onTaskAdd }) {
  const [isStudy, setIsStudy] = useState(true);
  const [isWork, setIsWork] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const [currentTaskType, setCurrentTaskType] = useState('study')
  const [currentTask, setCurrentTask] = useState('');
  const [showWarning, setShowWarning] = useState(false);
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
  function idGenerator() {
    return Math.random().toString(16).slice(2);
  }
  function onEnterPress(e) {
    if (e.key === 'Enter') {
      if (currentTask.trim().length < 3 || currentTask.trim().length > 55) {
        setShowWarning(true);
        return
      }
      setShowWarning(false);
      onTaskAdd({ text: currentTask, type: currentTaskType, id: idGenerator(), completed: false });
      setCurrentTask('');
    }
  }
  function addTask() {
    if (currentTask.trim().length < 3 || currentTask.trim().length > 55) {
      setShowWarning(true);
      return
    }
    setShowWarning(false);
    onTaskAdd({ text: currentTask, type: currentTaskType, id: idGenerator(), completed: false });
    setCurrentTask('');

  }
  return (
    <>
      <div className='create-task'>
        <div className="create-task__buttons">
          <button onClick={() => {
            setCurrentTaskType('study');
            onTypeClick('study');
          }} className={`create-task__study ${isStudy ? 'active' : ''}`}></button>
          <button onClick={() => {
            setCurrentTaskType('work');
            onTypeClick('work');
          }} className={`create-task__work ${isWork ? 'active' : ''}`}></button>
          <button onClick={() => {
            setCurrentTaskType('other');
            onTypeClick('other');
          }} className={`create-task__other ${isOther ? 'active' : ''}`}></button>
        </div>
        <input onKeyDown={onEnterPress} onChange={(e) => setCurrentTask(e.target.value)} className='create-task__text' type="text" placeholder='What is your task?' value={currentTask} />
        <button onClick={addTask} className='create-task__add'>
          <img width={'26px'} src="/done.svg" alt="" />
        </button>
      </div>
      {
        showWarning ? <p className='create-task__warning'>Tasks should containt 3 to 55 letters!</p> : ''
      }

    </>
  )
}
export default CreateTask