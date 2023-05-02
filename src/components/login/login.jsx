import React from 'react'
import './styles.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  const setValues = (value,event)=>{
    if(value === 'username'){
       setUserName(event?.target?.value)
    } else if (value === 'password'){
        setPassword(event.target.value)
    }
  }

  let login = ()=>{
    let payload = {
        username:userName,
        password:password
    }
    if(payload?.username && payload?.password)
    navigate('home',{state:{username:payload.username}, replace:true})

  }



  return (
    <>
    <div className="container">
        <div className="login-card">
            <div className="input-container">
                <span>Username</span>
                <input value={userName} type="text" id="username" onChange={(event)=> setValues('username',event)} />
            </div>
            <div className="input-container">
                <span>Password</span>
                <input type="password" value={password} id="password" onChange={(event)=> setValues('password',event)} />
            </div>
            <button onClick={()=>login()}>Login</button>
        </div>
    </div>
    </>
  )
}
