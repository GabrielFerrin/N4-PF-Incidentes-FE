import './Button01.css'

const Button01 = ({ onClick, value, color }) => {
  return (
    <div className='button01-cmp' onClick={onClick} style={{ color }}>
      {value}
    </div>
  )
}

Button01.propTypes = null

export default Button01