import './DeleteModal.scss'
function DeleteModal({ onTaskDelete, setDeleteModalActive }) {
  return (
    <div className="delete-modal">
      <div className="delete-modal__box">
        <p className='delete-modal__text'>Are you sure?</p>
        <div className="delete-modal__btns">
          <button onClick={onTaskDelete} className="delete-modal__yes-btn">Yes</button>
          <button onClick={() => setDeleteModalActive(false)} className="delete-modal__no-btn">No</button>
        </div>
      </div>
    </div>
  )
}
export default DeleteModal