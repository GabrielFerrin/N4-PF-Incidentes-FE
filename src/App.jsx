import './App.css'
import Button01 from './components/Button01'
import Button02 from './components/Button02'
import Button03 from './components/Button03'

function App() {

  return (
    <div className='app-cmp-wrapper light'>
      <div className="app-cmp">
        <header>
          <nav className='nav-app'>
            <a href="#">
              <img src="../../public/main-logo-light.svg" alt="Main logo"
                loading="lazy" height={25} />
            </a>
            <div className="buttons-wrap-app">
              <Button01 value="INGRESAR" color="white"
                onClick={() => { console.log('Hello') }} />
              <Button02 value="REGISTRARME" color="white"
                onClick={() => { console.log('Hello') }} />
            </div>
          </nav>
        </header>
        <main>
          <section className='hero-sec-app'>
            <div className="hero-content-app">
              <div className="hero-left-app">
                <span className='hero-myname-app'>GABRIEL FERRIN</span>
                <h1 className='main-title-app'>
                  El control de tu hogar en tus manos.
                </h1>
                <p className='hero-paragraph-app'>
                  Este es un proyecto de muestra. Emula la sección de
                  reporte de incidentes de un condominio. Para probarlo
                  debes registrarte. Puedes contactar al creador para
                  pedir acceso.
                </p>
                <div className="buttons-wrap-app">
                  <Button02 value="PROBAR APLICACIÓN" color="white"
                    onClick={() => { console.log('Hello') }} />
                  <Button03 value="INGRESAR" color="white"
                    onClick={() => { console.log('Hello') }} />
                </div>
              </div>
              <div className="hero-right-app">
                <img src="../../public/condominio.png"
                  alt="Condo image" loading="lazy" height={450} />
              </div>
            </div>
          </section>
        </main>
        <footer>Footer</footer>
      </div>
    </div>
  )
}

export default App
