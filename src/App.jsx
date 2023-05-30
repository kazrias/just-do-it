import { useState } from 'react';
import './App.scss'
import CreateTask from './component/CreateTask/CreateTask'
import Filters from './component/Filters/Filters'
import Tasks from './component/Tasks/Tasks'
import EditTask from './component/EditTask/EditTask';
function App() {

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTask] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState({text:''});
  function onTaskAdd(newTask) {
    setTasks([...tasks, newTask])
  }
  function onTaskDelete(taskToDeleteId) {
    setCompletedTask(completedTasks.filter(task => task.id !== taskToDeleteId))
    setTasks(tasks.filter(task => task.id !== taskToDeleteId));
  }
  function onTaskComplete(completedTask) {
    setCompletedTask([...completedTasks, completedTask]);
  }
  function onEditClick(editableTask) {
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
    )
  }
  return (
    <div className='app'>
      <div className="welcome-screen">
        <h1 className='welcome-screen__title'>JUST DO IT</h1>
      </div>
      <div className="container">
        <div className="main-screen">
          <Filters />
          <CreateTask onTaskAdd={onTaskAdd} />
          <Tasks onEditClick={onEditClick} onTaskComplete={onTaskComplete} onTaskDelete={onTaskDelete} tasks={tasks} />
        </div>
      </div>
      <EditTask onEditComplete={onEditComplete} setTaskToEdit={setTaskToEdit} taskToEdit={taskToEdit} />
    </div >
  )
}

export default App
