import './Task.scss'
function Task({ text, type, completed }) {
  return (
    <div className={`task ${completed ? 'task_completed' : ''}`}>
      <div className="task__main">
        <div className={`task__type task__type_${type}`}></div>
        <div className="task__text">{text}</div>
      </div>
      <div className="task__functionality"></div>
    </div>
  )
}
export default Task