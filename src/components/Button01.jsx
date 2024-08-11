import './Button01.css'

const Button01 = ({ onClick, value, color }) => {
  return (
    <button className='button01-cmp' onClick={onClick}
      style={{ color }}>
      {value}
    </button>
  )
}

Button01.propTypes = null

export default Button01