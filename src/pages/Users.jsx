import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/DataContext"
import { useMutation } from "react-query"

const Users = () => {
  const { user, getUsersReq } = useContext(DataContext)
  const [users, setUsers] = useState([])

  const getUsers = useMutation(getUsersReq, {
    onSuccess: (data) => {
      setUsers(data.users)
    }
  })
  
  useEffect(() => {
    getUsers.mutate()
    // eslint-disable-next-line
  }, [user])

  return (
    <div className="users-cmp">
      <h1>Users</h1>
      <div className="cards-users">

      </div>
    </div>
  )
}

Users.propTypes = null

export default Users