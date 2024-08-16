import './Button01.css'
import Loader from './Loader'

const Button01 = ({ onClick, value, color, small = false, loading = false }) => {
  return (
    <button className='button01-cmp' onClick={onClick}
      style={{ color, height: small ? 35 : 45 }}>
      {loading ? <Loader /> : value}
    </button>
  )
}

Button01.propTypes = null

export default Button01