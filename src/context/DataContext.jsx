import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const api = axios.create({ baseURL: import.meta.env.VITE_API })
  const [user, setUser] = useState({})
  const [token, setToken] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const restrictedRoutes = ['/dashboard', '/dashboard/users', '/dashboard/incidents']


  const verify = useMutation(async () => {
    const tempToken = localStorage.getItem('token')
    const response = await api.post('mainUser/verify', {},
      { headers: { Authorization: tempToken } })
    return response.data
  }, {
    onSuccess: (data) => {
      setUser(data.user)
      setToken(data.user.token)
    },
    onError: () => {
      setToken('');
      if (restrictedRoutes.includes(location.pathname)) {
        navigate('/login');
      }
    }
  })

  useEffect(() => {
    const tempToken = localStorage.getItem('token');
    if (tempToken) {
      verify.mutate();
    } else {
      setToken('');
      if (restrictedRoutes.includes(location.pathname)) {
        navigate('/login');
      }
    }
    // eslint-disable-next-line
  }, [])

  const registerReq = async (data) => {
    const response = await api.post('mainUser', data)
    return response.data
  }

  const loginReq = async (data) => {
    const response = await api.post('mainUser/login', data)
    return response.data
  }

  const getUsersReq = async () => {
    const response = await api.get('mainUser/users', {
      headers: { Authorization: token }
    })
    return response.data
  }

  return (
    <DataContext.Provider value={{
      // requests
      registerReq, loginReq, getUsersReq,
      // data
      setToken, token, user, setUser
    }}>
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = null