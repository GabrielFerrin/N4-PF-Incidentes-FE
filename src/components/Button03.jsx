import './Button03.css'

const Button03 = ({ onClick, value, color, small = false }) => {
  return (
    <button className='button03-cmp' onClick={onClick}
      style={{
        border: '1px solid ' + color, color,
        height: small ? 35 : 45
      }}>
      {value}
    </button>
  )
}

Button03.propTypes = null

export default Button03