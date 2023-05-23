import React from 'react';
import { Login } from './components/login/login';
import { Navigate } from 'react-router-dom';
export function AuthGuard({isAuthenticated,children}){
   console.log(isAuthenticated, "FFFFFF")
  return(
    <>
    {
      isAuthenticated()?(children):(<Navigate to="/" replace />)
    }
   
    </>
  )
}


