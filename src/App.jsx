import './App.scss'
import CreateTask from './component/CreateTask/CreateTask'
import Filters from './component/Filters/Filters'
function App() {
  return (
    <div className='app'>
      <div className="welcome-screen">
        <h1 className='welcome-screen__title'>JUST DO IT</h1>
      </div>
      <div className="container">
        <div className="main-screen">
          <Filters />
          <CreateTask />
          <p>//Tasks</p>
        </div>
      </div>
    </div >
  )
}

export default App
