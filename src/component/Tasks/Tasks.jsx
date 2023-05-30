import Task from "../Task/Task"
function Tasks({ tasks,onTaskComplete,onEditClick,onTaskDelete }) {
  return (
    <div className="tasks">
      {
        tasks.map(task =>
          <Task task={task} onTaskComplete={onTaskComplete} onEditClick={onEditClick} onTaskDelete={onTaskDelete} key={task.id} text={task.text} type={task.type} completed={task.completed} id={task.id}/>
        )
      }
    </div>
  )
}
export default Tasks