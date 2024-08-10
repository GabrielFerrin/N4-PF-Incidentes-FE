import './Button02.css'

const Button02 = ({ onClick, value, color }) => {
  return (
    <div className='button02-cmp' onClick={onClick} style={{ color }}>
      {value}
    </div>
  )
}

Button02.propTypes = null

export default Button02