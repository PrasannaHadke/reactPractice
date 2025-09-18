import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext);
    const [username , setUserName] = useState('')
    const [password , setPassword] = useState('')

    const handleSubmit = ()=>{
        setUser({username , password})
        setUserName('')
        setPassword('')
        navigate('/profile')
    }
  return (
    <div>
        <label>UserName : </label>
        <input type="text" onChange={(e)=> setUserName(e.target.value)}/>
        <br />
        <label>Password : </label>
        <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login