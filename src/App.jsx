import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className='app-cmp-wrapper light'>
      <div className='app-cmp'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
