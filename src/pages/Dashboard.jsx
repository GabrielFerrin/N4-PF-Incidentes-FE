import './Dashboard.css'
import { useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import { Route, Routes, useNavigate } from "react-router-dom"
import Users from './Users'
import Incidents from './Incidents'
import DashNav from '../components/DashNav'

const Dashboard = () => {
  const { setToken, token, setUser } = useContext(DataContext)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      if (!token) navigate('/login')
    }, 2000);
    // eslint-disable-next-line
  }, [token])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken('')
    setUser({})
    navigate('/login')
  }

  return (
    <div className="dashboard-cmp">
      <DashNav />
      <button onClick={handleLogout}>logout</button>
      <button onClick={() => navigate('/dashboard/users')}>Users</button>
      <div className="content-dashboard">
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="incidents" element={<Incidents />} />
          <Route path="*" element={<Users />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard