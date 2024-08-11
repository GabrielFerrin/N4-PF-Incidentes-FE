import './Button02.css'

const Button02 = ({ onClick, value, color, small = false }) => {
  return (
    <button className='button02-cmp' onClick={onClick}
      style={{ color, height: small ? 35 : 45 }}>
      {value}
    </button>
  )
}

Button02.propTypes = null

export default Button02