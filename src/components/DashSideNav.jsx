import './DashSideNav.css'
import { useContext, useEffect, useRef, useState } from "react"
import { DataContext } from "../context/DataContext"
import { useNavigate } from "react-router-dom"
import MenuItem from './MenuItem'
const DashSideNav = () => {
  const { setToken, setUser, setSubUser } = useContext(DataContext)
  const [collapsed, setCollapsed] = useState(false)
  const content = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if (collapsed) {
      setTimeout(() => {
        content.current.style.display = 'none'
      }, 500)
    } else {
      setTimeout(() => {
        content.current.style.display = 'flex'
      }, 500)
    }
  }, [collapsed])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('subUser')
    setToken('')
    setUser({})
    setSubUser({})
    navigate('/login')
  }

  return (
    <div className={"dash-sidenav-cmp" +
      (collapsed ? " collapsed" : "")}>
      <div onClick={() => setCollapsed(!collapsed)}
        className={"collapse-button-dash-sidenav" +
          (collapsed ? " collapsed" : "")}
      >
        <img src="/collapse-border-ico.svg" alt="Collapse border icon"
          className={"border-sidenav" + (collapsed ? " collapsed" : "")}
          height={22} />
        <img src="/collapse-arrow-ico.svg" alt="" height={10}
          className={"arrow-sidenav" + (collapsed ? " collapsed" : "")} />
      </div>
      <div ref={content} className={"content-sidenav" +
        (collapsed ? " collapsed" : "")}>
        <MenuItem logo='home' value="Home" selected={true} to="/home" />
        <MenuItem logo='' value='Cerrar sesión' onClick={handleLogout} />
      </div>
    </div>
  )
}
export default DashSideNav