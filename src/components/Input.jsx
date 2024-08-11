import './Input.css'

const Input = ({ type, name, placeholder, onChange }) => {
  return (
    <div className='input-cmp'>
      <input type={type} name={name} placeholder={placeholder}
        onChange={onChange} className="input" />
    </div>
  )
}

Input.propTypes = null

export default Input