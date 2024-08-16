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
import Loader from '../components/Loader'
import Checkmark from '../icons/Checkmark'

const Register = () => {
  const { registerReq, createUsersReq, createIncidentsReq, setToken
   } = useContext(DataContext)
  const [errors, setErrors] = useState([])
  const [showCreating, setShowCreating] = useState(false)
  const navigate = useNavigate()
  const form = useRef(null)

  const register = useMutation(registerReq, {
    onSuccess: (data) => {
      if (data.success) {
        setToken(data.user.token)
        localStorage.setItem('token', data.user.token)
        setShowCreating(true)
        createUsers.mutate(data.user.token)
        createIncidents.mutate(data.user.token)
      }
      else
        setErrors([data.message])
    },
    onError: (error) => {
      setErrors(error.response.data.message)
    }
  })

  const createUsers = useMutation(createUsersReq, {
    onSuccess: (data) => {
      if (data.success)
        console.log(data)
      else
        console.log('error:', data)
    },
    onError: (error) => {
      console.log('errors:', error)
    }
  })

  const createIncidents = useMutation(createIncidentsReq, {
    onSuccess: (data) => {
      if (data.success) {
        navigate('/dashboard')
        console.log(data)
      }
      else
        console.log('error:', data)
    },
    onError: (error) => {
      console.log('errors:', error)
    }
  })

  const validate = () => {
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
              onClick={handleRegister} loading={register.isLoading} />
            {errors.length > 0 && <Errors errors={errors} />}
          </form>
          {showCreating &&
            <div className="info-card-register">
              <div className="card-item-register">
                <div className="item-icon-register">
                  {createUsers.isLoading && <Loader />}
                  {createUsers.isSuccess && <Checkmark />}
                </div>
                <span>Creando usuarios de prueba</span>
              </div>
              <div className="card-item-register">
                <div className="item-icon-register">
                  {createIncidents.isLoading && <Loader />}
                  {createIncidents.isSuccess && <Checkmark />}
                </div>
                <span>Creando incidentes de prueba</span>
              </div>
            </div>}
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default Register