import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-cmp'>
      <p>© {new Date().getFullYear()} Designed by: <strong>Gabriel Ferrín</strong></p>
      <div className="socials-home">
        <a href="http://">
          <img src="linkedin-light.svg" alt="Linkedin logo"
            height={25} />
        </a>
        <a href="http://">
          <img src="github-light.svg" alt="Linkedin logo"
            height={25} />
        </a>
      </div>
    </footer>
  )
}
export default Footer