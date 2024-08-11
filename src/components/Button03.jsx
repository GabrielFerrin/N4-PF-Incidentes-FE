import './Button03.css'

const Button03 = ({ onClick, value, color }) => {
  return (
    <button className='button03-cmp' onClick={onClick}
      style={{ border: '1px solid ' + color, color }}>
      {value}
    </button>
  )
}

Button03.propTypes = null

export default Button03