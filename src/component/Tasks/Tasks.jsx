import Task from "../Task/Task"
function Tasks({ tasks,onTaskComplete,onEditClick,setEditIsActive,onTaskDelete,onDeleteModalActivationg }) {
  return (
    <div className="tasks">
      {
        tasks.map(task =>
          <Task setEditIsActive={setEditIsActive} onDeleteModalActivationg={onDeleteModalActivationg} task={task} onTaskComplete={onTaskComplete} onEditClick={onEditClick} onTaskDelete={onTaskDelete} key={task.id} text={task.text} type={task.type} completed={task.completed} id={task.id}/>
        )
      }
    </div>
  )
}
export default Tasks