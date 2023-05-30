import Task from "../Task/Task"
function Tasks({ tasks }) {
  return (
    <div className="tasks">
      {
        tasks.map(task =>
          <Task key={task.id} text={task.text} type={task.type} completed={task.completed} />
        )
      }
    </div>
  )
}
export default Tasks