import { useState } from 'react';
import './App.scss'
import CreateTask from './component/CreateTask/CreateTask'
import Filters from './component/Filters/Filters'
import Tasks from './component/Tasks/Tasks'
import EditTask from './component/EditTask/EditTask';
import DeleteModal from './component/DeleteModal/DeleteModal';
function App() {

  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState({ text: '' });
  const [editIsActive, setEditIsActive] = useState(false);
  const [studyFilter, setStudyFilter] = useState(false);
  const [workFilter, setWorkFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [editWarning, setEditWarning] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState()
  function onTaskAdd(newTask) {
    setTasks([newTask, ...tasks])
  }
  function onTaskDelete() {
    setTasks(tasks.filter(task => task.id !== taskIdToDelete));
    setDeleteModalActive(false)
  }
  function onTaskComplete(completedTask) {
    setTasks(
      tasks.map(task => {
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
    if (taskToEdit.text.trim().length < 3 || taskToEdit.text.trim().length > 55) {
      setEditWarning(true);
      return
    }
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
    setEditWarning(false);
    setEditIsActive(false);
  }
  function onCompleteClick() {
    setCompleted(!completed)
  }
  function onDeleteModalActivationg(id) {
    setDeleteModalActive(true);
    setTaskIdToDelete(id)
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
    tasksToShow = tasksToShow.filter(task => !task.completed)
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
          <Tasks onDeleteModalActivationg={onDeleteModalActivationg} setEditIsActive={setEditIsActive} onEditClick={onEditClick} onTaskComplete={onTaskComplete} onTaskDelete={onTaskDelete} tasks={tasksToShow} />
        </div>
      </div>
      <>
        {
          editIsActive ? <EditTask onEditComplete={onEditComplete} setTaskToEdit={setTaskToEdit} setEditIsActive={setEditIsActive} taskToEdit={taskToEdit} editWarning={editWarning} setEditWarning={setEditWarning} /> : ''
        }
      </>
      <>
        {
          deleteModalActive ? <DeleteModal onTaskDelete={onTaskDelete} setDeleteModalActive={setDeleteModalActive} /> : ''
        }
      </>
    </div >
  )
}

export default App
