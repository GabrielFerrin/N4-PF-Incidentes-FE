import './Dashboard.css'
import { Route, Routes } from "react-router-dom"
import Users from './Users'
import Incidents from './Incidents'
import DashHeader from '../components/DashHeader'
import DashSideNav from '../components/DashSideNav'

const Dashboard = () => {
  

  return (
    <div className="dashboard-cmp">
      <DashHeader />
      <main className="main-dashboard">
        <DashSideNav />
        <div className="content-dashboard">
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="incidents" element={<Incidents />} />
            <Route path="*" element={<Users />} />
          </Routes>
        </div>
      </main>
    </div >
  )
}

export default Dashboard