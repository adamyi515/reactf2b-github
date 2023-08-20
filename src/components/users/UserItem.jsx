import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='user-item'>
        <div className='user-item__img'>
            <img src={avatar_url} className='img--image' alt='user profile' />
        </div>

        <div>
            <h1 style={{ fontWeight: 'bold' }}>{ login }</h1>
            <Link to={`/user/${login}`}>
                Visit Profile
            </Link>
        </div>
    </div>
  )
}

export default UserItem