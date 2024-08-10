import './Header.css'
import { useEffect, useRef } from "react"
import Button01 from "./Button01"
import Button02 from "./Button02"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const nav = useRef(null)
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
    <header className="header-cmp">
      <nav ref={nav} className='nav-header'>
        <a href="#">
          <img src="main-logo-light.svg" alt="Main logo"
            loading="lazy" height={25} />
        </a>
        <div className="buttons-wrap-header">
          <Button01 value="INGRESAR" color="white"
            onClick={() => { navigate('/login') }} />
          <Button02 value="REGISTRARME" color="white"
            onClick={() => { navigate('/register') }} />
        </div>
      </nav>
    </header>
  )
}
export default Header