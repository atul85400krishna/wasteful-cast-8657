import React from 'react'
import {Routes, Route } from "react-router-dom"
import AdminMain from './AdminMain'
import Hotel from './Hotel'
function AdminRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<AdminMain/>}/>
<Route path="/hotel" element={<Hotel/>} />
        </Routes>
    </div>
  )
}

export default AdminRoutes

