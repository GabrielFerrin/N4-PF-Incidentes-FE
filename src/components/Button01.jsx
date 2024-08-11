import './Button01.css'

const Button01 = ({ onClick, value, color, small = false }) => {
  return (
    <button className='button01-cmp' onClick={onClick}
      style={{ color, height: small ? 35 : 45 }}>
      {value}
    </button>
  )
}

Button01.propTypes = null

export default Button01