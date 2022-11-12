import React from 'react'
import { useContext ,children} from "react";
import { useLocation } from 'react-router-dom';
import { ShowContext } from '../Context/ShowContext';
import {Navigate} from "react-router-dom"


const PrivateRoute = ({children}) => {
    const {isAuth}=useContext(ShowContext)
    const location=useLocation()
    

 if(!isAuth){
    return <Navigate to="/signin" />
 }
 return children
}

export default PrivateRoute