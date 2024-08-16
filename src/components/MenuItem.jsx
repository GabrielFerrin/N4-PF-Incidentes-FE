import MenuIcon from '../icons/MenuIcon'
import './MenuItem.css'
import { Link } from "react-router-dom"

const MenuItem = ({ logo, value, onClick = null, to = '', selected }) => {
  return (
    <div className={`menu-item-cmp ${selected ? 'selected' : ''}`} onClick={onClick}>
      
      <Link to={to}>
        <MenuIcon logo={logo} />
        {value}
      </Link>
    </div>
  )
}

MenuItem.propTypes = null

export default MenuItem