import './Errors.css'

const Errors = ({ errors = [] }) => {
  return (
    <div className='errors-cmp'>
      {errors.length > 0 && errors.map((error, i) =>
        <p key={i} className='error-msg'>{error}</p>)}
    </div>
  )
}

Errors.propTypes = null

export default Errors