import './Button03.css'

const Button03 = ({ onClick, value, color }) => {
  return (
    <div className='button03-cmp' onClick={onClick} style={{ color }}>
      {value}
    </div>
  )
}

Button03.propTypes = null

export default Button03