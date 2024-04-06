import AuthContext from '../context/AuthContext'
import {useContext} from 'react'
import jwt_decode from "jwt-decode";


import { Link } from 'react-router-dom'

function Navbar() {

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwt_decode(token) 
    var user_id = decoded.user_id
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <Navbar.Brand href='/'>SPORRMS</Navbar.Brand>
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/s">Home</a>
              </li>
              <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
              </li>
              {token === null && 
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register">Register</Link>
                </li>
              </>
              }

            {token !== null && 
              <>
                <li class="nav-item">
                  <a class="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}>Logout</a>
                </li>
              </>
              }   
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar