import React from 'react';

export function AuthGuard({isAuthenticated,children}){

  return(
    <>
    {children}
    </>
  )
}


