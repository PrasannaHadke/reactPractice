import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h1>{`Welcome User` || user.username}</h1>
  return (
    <div>
        <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Profile