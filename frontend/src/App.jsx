import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Register from './pages/register';
import Login from './pages/login';


const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
