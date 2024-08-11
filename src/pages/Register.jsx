import './Register.css'
import Header from "../components/Header"
import Footer from './Footer'
import Button03 from '../components/Button03'
import Input from '../components/Input'
import { useContext, useRef, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { useMutation } from 'react-query'
import Errors from '../components/Errors'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { registerReq } = useContext(DataContext)
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  const form = useRef(null)

  const register = useMutation(registerReq, {
    onSuccess: (data) => {
      if (data.success)
        navigate('/login')
      else
        setErrors([data.message])
    },
    onError: (error) => {
      setErrors(error.response.data.message)
    }
  })

  const validate = () => {
    console.log('validando...')
  }

  const handleRegister = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const data = Object.fromEntries(formData)
    register.mutate(data)
  }

  return (
    <div className="register-cmp">
      <Header color="#28114d" />
      <main>
        <section className="sec-register">
          <h2>Registro</h2>
          <form ref={form} className='form-register'>
            <Input type="email" name="email" placeholder="Correo"
              onChange={validate} />
            <Input type="password" name="password"
              placeholder="Contraseña" onChange={validate} />
            <Input type="number" name="code"
              placeholder="Código" onChange={validate} />
            <Button03 value="REGISTRARME" color="black"
              onClick={handleRegister} />
            {errors.length > 0 && <Errors errors={errors} />}
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default Register