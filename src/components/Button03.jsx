import './Button03.css'
import Loader from './Loader'

const Button03 = ({ onClick, value, color, small = false, loading = false
}) => {
  return (
    <button className='button03-cmp' onClick={onClick}
      style={{
        border: '1px solid ' + color, color,
        height: small ? 35 : 45
      }}>
      {loading ? <Loader /> : value}
    </button>
  )
}

Button03.propTypes = null

export default Button03