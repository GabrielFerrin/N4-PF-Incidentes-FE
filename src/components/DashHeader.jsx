import { Link, useLocation } from 'react-router-dom'
import './DashHeader.css'
import { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../context/DataContext'

const DashHeader = () => {
  const { user, subUser } = useContext(DataContext)
  const [username, setUsername] = useState('')
  const nav = useRef(null)
  const location = useLocation()

  useEffect(() => {
    location.pathname === '/dashboard/incidents' ?
      setUsername(subUser.username || subUser.email) :
      setUsername(user.username || user.email)
    // eslint-disable-next-line
  }, [location])

  const handleScroll = () => {
    if (window.scrollY > 80) {
      nav.current.classList.add('scrolled')
    } else {
      nav.current.classList.remove('scrolled')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [nav])

  return (
    <header className="dash-header-cmp">
      <nav ref={nav} className='nav-header'>
        <Link to="/home">
          <img src="/main-logo-light.svg" alt="Main logo"
            loading="lazy" height={25} />
        </Link>
        <div className="user-wrap-dash-header">
          <span>{username}</span>
          <div className="circle-dash-header">
            <img src="/david.jpg" alt="User profile image"
              loading="lazy" height={45} width={45} />
          </div>
        </div>
      </nav>
    </header>
  )
}

DashHeader.propTypes = null

export default DashHeader