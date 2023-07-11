import { useSelector } from 'react-redux'
import { selectAllUsers } from './userSlice'
import { Link } from 'react-router-dom'

const UsersList = () => {
    const users = useSelector(selectAllUsers)

    const renderedUsers = users.map(user => (
        <li key={user.id} className='border-2 p-2 my-2 rounded-md'>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
        </li>
    ))

    return (
        <section>
            <div className='text-4xl text-center justify-center font-bold'>Users:</div>

            <ul className='list-decimal'>{renderedUsers}</ul>
        </section>
    )
}

export default UsersList