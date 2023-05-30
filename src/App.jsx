import './App.scss'
import CreateTask from './component/CreateTask/CreateTask'
import Filters from './component/Filters/Filters'
import Tasks from './component/Tasks/Tasks'
function App() {
  const tasks = [
    {
      text: 'Do this project!',
      type: 'study',
      completed:false,
      id: idGenerator()
    },
    {
      text: 'Find job!',
      type: 'work',
      completed:false,
      id: idGenerator()
    },
    {
      text: 'Sleep well!',
      type: 'other',
      completed:false,
      id: idGenerator()
    }
  ];
  function idGenerator(obj) {
    return Math.random().toString(16).slice(2);
  }
  return (
    <div className='app'>
      <div className="welcome-screen">
        <h1 className='welcome-screen__title'>JUST DO IT</h1>
      </div>
      <div className="container">
        <div className="main-screen">
          <Filters />
          <CreateTask />
          <Tasks tasks={tasks} />
        </div>
      </div>
    </div >
  )
}

export default App
