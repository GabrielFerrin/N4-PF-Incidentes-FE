import './Users.css'
import { useContext, useEffect, useState } from "react"
import { useMutation } from "react-query"
import { DataContext } from "../context/DataContext"
import UserCard from "../components/UserCard"

const Users = () => {
  const { user, getUsersReq } = useContext(DataContext)
  const [users, setUsers] = useState([])

  const getUsers = useMutation(getUsersReq, {
    onSuccess: (data) => {
      setUsers(data.users)
    }
  })

  useEffect(() => {
    Object.keys(user).length !== 0 && getUsers.mutate()
    // eslint-disable-next-line
  }, [user])

  return (
    <div className="users-cmp">
      <h1>Users</h1>
      <div className="cards-users">
        {users.length > 0 && users.map((user) => (
          <UserCard key={user.userId} user={user} />
        ))}
      </div>
    </div>
  )
}

Users.propTypes = null

export default Users