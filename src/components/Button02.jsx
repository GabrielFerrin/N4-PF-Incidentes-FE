import './Button02.css'

const Button02 = ({ onClick, value, color }) => {
  return (
    <button className='button02-cmp' onClick={onClick}
      style={{ color }}>
      {value}
    </button>
  )
}

Button02.propTypes = null

export default Button02