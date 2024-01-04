import { User } from '../types/User'

interface UserProps {
  user: User
}
const UserItem = ({ user }: UserProps) => {
  return <div>{`name: ${user.name}`}</div>
}

interface UserListProps {
  users: User[]
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  )
}

export default UserList
