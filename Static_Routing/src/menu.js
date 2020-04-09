import React from 'react';
import './MenuStyle.css';
import {Link} from 'react-router-dom';
const Menu=()=>{
  return (
    <div className="MenuStyle">
      <ul>
        <li><Link to="Home">home</Link></li>
        
        <li><Link to="About">About</Link></li>
        <li><Link to="Contact">Contact</Link></li>
        </ul>
      </div>
  )
}

export default Menu;
