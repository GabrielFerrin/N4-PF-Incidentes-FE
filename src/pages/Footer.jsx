import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-cmp'>
      <p>© {new Date().getFullYear()} Designed by: <strong>Gabriel
        Ferrín</strong></p>
      <div className="socials-home">
        <a href="https://linkedin.com/in/gabriel-ferrin-moreira"
          target="_blank" rel="noreferrer">
          <img src="linkedin-light.svg" alt="Linkedin logo"
            height={25} />
        </a>
        <a href="https://github.com/GabrielFerrin"
          target="_blank" rel="noreferrer">
          <img src="github-light.svg" alt="Linkedin logo"
            height={25} />
        </a>
      </div>
    </footer>
  )
}
export default Footer