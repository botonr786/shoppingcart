import React from 'react';
import {Link} from 'react-router-dom';
 import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar=(props)=>{
  return(
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
<div className="container"> 
<Link href="" className="navbar-brand">Online Shopping</Link>
  
  <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarid">
    <span className="navbar-toggler-icon"></span>
    
  </button>

 <div className="collapse navbar-collapse" id="navbarid">
 <ul className="navbar-nav ml-auto">
   <li className="nav-item">
     <Link exact to="/" className="nav-link">Home</Link>
   </li>
   <li className="nav-item">
     <Link to="About" className="nav-link">about</Link>
   </li>
   <li className="nav-item">
     <Link to="/Contact" className="nav-link">Contact</Link>
   </li>
   <li className="nav-item">
     <Link to="/Product" className="nav-link">Product</Link>
   </li>
   <li className="nav-item">
     <Link to="/Login" className="nav-link">Login</Link>
   </li>
   <li className="nav-item">
     <Link to="/Login" className="nav-link"><ShoppingCartIcon/></Link>
   </li>
 </ul>
 </div>
 </div>
</nav>
  )
}
export default Navbar;