import React from "react";
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <>
        <h1 className="navbar-heading" style={{textAlign: 'center'}} >Feminine Frequencies</h1>
        <p className="navbar-subheading" style={{textAlign: 'center'}} >Tuning into the world of music, tech, food, and books</p>
        <nav class="nav nav-pills flex-column flex-sm-row">
        <Link className="flex-sm-fill text-sm-center nav-link" aria-current="page" to="/">Home</Link>

 
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Category</a>
    <ul class="dropdown-menu">
         
            <li><Link className="dropdown-item" to="/music">Music</Link></li>
            <li><Link className="dropdown-item" to="/tech">Tech Talk</Link></li>
            <li><Link className="dropdown-item" to="/food">Food</Link></li>
            <li><Link className="dropdown-item" to="/femininity">Femininity</Link></li>
    </ul>
  </li>
  <Link className="flex-sm-fill text-sm-center nav-link" aria-current="page" to="/about">About</Link>
    </nav>
        </>
    )
}
export default NavBar;