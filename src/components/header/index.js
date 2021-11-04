import React from "react";
import "../header/index.css"

import { BrowserRouter, NavLink } from 'react-router-dom';


export class Header extends React.Component {
    render() {
      return (
        <div className="header">
        <BrowserRouter>
         <div className= "logo"><p>APJ</p><p>Furniture</p></div>
          <nav>
            <li><NavLink to="/home" activeClassName ="selected" className ="navigation-item-main">Home</NavLink></li>
            <li><NavLink to="/prodact" activeClassName ="selected" className ="navigation-item-rest">Prodact</NavLink></li>
            <li><NavLink to="/about" activeClassName ="selected"className ="navigation-item-rest">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName ="selected"className ="navigation-item-rest">Contact</NavLink></li>
         </nav>

         <div className ="search-account-login">
           <button><img src = "../header/images/search-icon.png" alt = "search"></img></button>
           <button><img src = "../header/images/account-icon.png" alt = "account"></img></button>
        

           
            </div>
      
         </BrowserRouter>
        </div>
     
      );
    }
  }