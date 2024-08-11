import { useEffect } from "react"

const UserCard = ({ user }) => {
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <div>UserCard</div>
  )
}

UserCard.propTypes = null

export default UserCard