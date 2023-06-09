import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router";
import auth from '../../firebase.init';



const RequireAuth = ({children}) => {
  const [user] = useAuthState(auth)

  const location = useLocation()

  if(!user){
    return <Navigate to="/log-in" state={{from: location}} replace /> 
  }

  return children;
}

export default RequireAuth;