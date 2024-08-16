import './Button02.css'
import Loader from './Loader'

const Button02 = ({ onClick, value, color, small = false, loading = false }) => {
  return (
    <button className='button02-cmp' onClick={onClick}
      style={{ color, height: small ? 35 : 45 }}>
      {loading ? <Loader /> : value}
    </button>
  )
}

Button02.propTypes = null

export default Button02