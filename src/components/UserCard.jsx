import './UserCard.css'
import Button02 from "./Button02"
import Button03 from "./Button03"

const UserCard = ({ user }) => {


  return (
    <div className="user-card-cmp">
      <div className="circle-user-card">
        <img src={'/' + user.name.toLowerCase() + '.jpg'}
          alt={user.name + ' profile image'} loading="lazy" height={150}
          width={150} />
      </div>
      <span className="title-user-card">
        {user.name} {user.lastname}
      </span>
      <span className="role-user-card">
        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
      </span>
      <div className="button-wrap-user-card">
        <Button03 value="USAR" color="#4d4d4d" small={true} />
        <Button02 value="EDITAR" small={true} color="white" />
      </div>
    </div>
  )
}

UserCard.propTypes = null

export default UserCard