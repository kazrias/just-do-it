import { useState } from 'react'
import './Filters.scss'
function Filters() {
  const [studyFilter, setStudyFilter] = useState(false);
  const [workFilter, setWorkFilter] = useState(false);
  const [otherFilter, setOtherFilter] = useState(false);
  return (
    <div className="filters">
      <div className="filters__main">
        <button onClick={() => {
          setStudyFilter(!studyFilter)
        }} className='filters__main-btn filters__main-btn_study'>
          <span style={studyFilter?{color:'#9376E0'}:{}} className='filters__brackets'>{studyFilter?'{':'['}</span>Study<span style={studyFilter?{color:'#9376E0'}:{}} className='filters__brackets filters__brackets_padding '>{studyFilter?'}':']'}</span>
        </button>
        <button onClick={() => {
          setWorkFilter(!workFilter)
        }} className='filters__main-btn filters__main-btn_work'>
          <span style={workFilter?{color:'#E893CF'}:{}} className='filters__brackets'>{workFilter?'{':'['}</span>Work<span style={workFilter?{color:'#E893CF'}:{}} className='filters__brackets filters__brackets_padding '>{workFilter?'}':']'}</span>
        </button>
        <button onClick={() => {
          setOtherFilter(!otherFilter)
        }} className='filters__main-btn filters__main-btn_other'>
          <span style={otherFilter?{color:'#F3BCC8'}:{}} className='filters__brackets'>{otherFilter?'{':'['}</span>Other<span style={otherFilter?{color:'#F3BCC8'}:{}} className='filters__brackets filters__brackets_padding '>{otherFilter?'}':']'}</span>
        </button>
      </div>
      <p className="filters__completed">completed</p>
    </div>
  )
}
export default Filters