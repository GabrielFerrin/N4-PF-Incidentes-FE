import './Home.css'
import Button02 from "../components/Button02"
import Button03 from "../components/Button03"
import Header from "../components/Header"
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Home = () => {
  const navigate = useNavigate()
  
  return (
    <div className="home-cmp">
      <Header color='transparent' />
      <main>
        <section className='hero-sec-home'>
          <div className="hero-content-home">
            <div className="hero-left-home">
              <span className='hero-myname-home'>GABRIEL FERRIN</span>
              <h1 className='hero-title-home'>
                El control de tu hogar en tus manos.
              </h1>
              <p className='hero-paragraph-home'>
                Este es un proyecto de muestra. Emula la sección de
                reporte de incidentes de un condominio. Para probarlo
                debes registrarte. Puedes contactar al creador para
                pedir acceso.
              </p>
              <div className="buttons-wrap-home">
                <Button02 value="PROBAR APLICACIÓN" color="white"
                  onClick={() => { navigate('/register') }} />
                <Button03 value="INGRESAR" color="white"
                  onClick={() => { navigate('/login') }} />
              </div>
            </div>
            <div className="hero-right-home">
              <img src="condominio.png"
                alt="Condo image" loading="lazy" height={450} />
            </div>
          </div>
        </section>
        <section className='mern-sec-home'>
          <div className="mern-wrap-home">
            <img src="mysql-img.png" alt=""
              height={55} />
            <img src="expressjs-img.png" alt=""
              height={55} />
            <img src="reactjs-img.png" alt=""
              height={55} />
            <img src="nodejs-img.png" alt=""
              height={55} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default Home