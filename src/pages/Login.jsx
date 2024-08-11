import { useContext, useEffect, useRef, useState } from "react"
import Header from "../components/Header"
import Input from "../components/Input"
import { useNavigate } from "react-router-dom"
import { DataContext } from "../context/DataContext"
import Footer from "./Footer"
import Errors from "../components/Errors"
import Button03 from "../components/Button03"
import { useMutation } from "react-query"

const Login = () => {
  const { loginReq, setToken, token, setUser } = useContext(DataContext)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  const form = useRef(null)

  useEffect(() => {
    if (token) navigate('/dashboard')
    // eslint-disable-next-line
  }, [token])

  const login = useMutation(loginReq, {
    onSuccess: (data) => {
      if (data.success) {
        setToken(data.user.token)
        localStorage.setItem('token', data.user.token)
        setUser(data.user)
        navigate('/dashboard')
      }
      else
        setErrors([data.message])
    },
    onError: (error) => {
      setErrors([error.response.data.message])
    }
  })

  const validate = () => {
    console.log('validando...')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const data = Object.fromEntries(formData)
    login.mutate(data)
  }

  return (
    <div className="register-cmp">
      <Header color="#28114d" />
      <main>
        <section className="sec-register">
          <h2>Login</h2>
          <form ref={form} className='form-register'>
            <Input type="email" name="email" placeholder="Correo"
              onChange={validate} />
            <Input type="password" name="password"
              placeholder="Contraseña" onChange={validate} />
            <Button03 value="ACCEDER" color="black"
              onClick={handleLogin} />
            {errors.length > 0 && <Errors errors={errors} />}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default Login