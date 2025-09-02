
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



const Header=()=>{
return (
    <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand"to={'/'} >Dance Academy</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        <Link class="nav-link" to={'/'}>About</Link>
        <Link class="nav-link" to={'/'}>Our Instruction</Link>
        <Link class="nav-link" to={'/'}>Our Services</Link>
         <Link class="nav-link" to={'/'}>Contatc Us</Link>
          <Link class="nav-link" to={'/'}>Register</Link>
           <Link class="nav-link" to={'/'}>Login</Link>
      </div>
    </div>
  </div>
</nav>

    </>
  );
}

export default Header;
