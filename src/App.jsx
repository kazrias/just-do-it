import { useState } from 'react';
import './App.scss'
import CreateTask from './component/CreateTask/CreateTask'
import Filters from './component/Filters/Filters'
import Tasks from './component/Tasks/Tasks'
import EditTask from './component/EditTask/EditTask';
function App() {

  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState({ text: '' });
  const [editIsActive, setEditIsActive] = useState(false);
  const [studyFilter, setStudyFilter] = useState(false);
  const [workFilter, setWorkFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);
  const [completed, setCompleted] = useState(false);
  function onTaskAdd(newTask) {
    setTasks([...tasks, newTask])
  }
  function onTaskDelete(taskToDeleteId) {
    setTasks(tasks.filter(task => task.id !== taskToDeleteId));
  }
  function onTaskComplete(completedTask) {
    setTasks(
      tasks.map(task => {
        console.log('map worked',task);
        if (task.id === completedTask.id) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task
      })
    )
  }
  function onEditClick(editableTask) {
    setEditIsActive(true);
    setTaskToEdit(editableTask);
  }
  function onEditComplete() {
    setTasks(
      tasks.map((obj) => {
        if (obj.id === taskToEdit.id) {
          return {
            ...obj,
            text: taskToEdit.text,
            type: taskToEdit.type,
          }
        }
        return obj
      })
    );
    setEditIsActive(false);
  }
  function onCompleteClick() {
    setCompleted(!completed)
  }
  let tasksToShow = [...tasks];
  if (studyFilter && !workFilter && !otherFilter) {
    tasksToShow = tasks.filter(task => task.type === 'study');
  }
  if (!studyFilter && workFilter && !otherFilter) {
    tasksToShow = tasks.filter(task => task.type === 'work');
  }
  if (!studyFilter && !workFilter && otherFilter) {
    tasksToShow = tasks.filter(task => task.type === 'other');
  }
  if (studyFilter && workFilter && !otherFilter) {
    tasksToShow = tasks.filter(task => task.type === 'study' || task.type === 'work');
  }
  if (studyFilter && !workFilter && otherFilter) {
    tasksToShow = tasks.filter(task => task.type === 'study' || task.type === 'other');
  }
  if (!studyFilter && workFilter && otherFilter) {
    tasksToShow = tasks.filter(task => task.type === 'work' || task.type === 'other');
  }
  if (studyFilter && workFilter && otherFilter) {
    tasksToShow = [...tasks];
  }
  if (completed) {
    tasksToShow = tasksToShow.filter(task => task.completed)
  }
  return (
    <div className='app'>
      <div className="welcome-screen">
        <h1 className='welcome-screen__title'>JUST DO IT</h1>
      </div>
      <div className="container">
        <div className="main-screen">
          <Filters studyFilter={studyFilter} setStudyFilter={setStudyFilter}
            workFilter={workFilter} setWorkFilter={setWorkFilter}
            otherFilter={otherFilter} setOtherFilter={setOtherFilter}
            completed={completed} onCompleteClick={onCompleteClick} />
          <CreateTask onTaskAdd={onTaskAdd} />
          <Tasks setEditIsActive={setEditIsActive} onEditClick={onEditClick} onTaskComplete={onTaskComplete} onTaskDelete={onTaskDelete} tasks={tasksToShow} />
        </div>
      </div>
      {
        editIsActive ? <EditTask onEditComplete={onEditComplete} setTaskToEdit={setTaskToEdit} taskToEdit={taskToEdit} /> : ''
      }
    </div >
  )
}

export default App
