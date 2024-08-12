import './DashSideNav.css'
import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"
const DashSideNav = () => {
  const { setToken, setUser } = useContext(DataContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken('')
    setUser({})
    navigate('/login')
  }

  return (
    <div className="dash-sidenav-cmp">
      <div className="content-sidenav">
        Hello
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
export default DashSideNav