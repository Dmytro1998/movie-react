import React from "react";
import "../header/index.css"
import { BrowserRouter,  Route, Switch, NavLink } from 'react-router-dom';


export class Header extends React.Component {
    render() {
      return (
        <div className="header">
        <BrowserRouter>
         <div className= "logo"><p>APJ</p><p>Furniture</p></div>
          <nav>
            <li><NavLink to="/home" activeClassName ="selected" className ="navigation-item">Home</NavLink></li>
            <li><NavLink to="/prodact" activeClassName ="selected" className ="navigation-item">Prodact</NavLink></li>
            <li><NavLink to="/about" activeClassName ="selected"className ="navigation-item">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName ="selected"className ="navigation-item">Contact</NavLink></li>
         </nav>
         </BrowserRouter>
        </div>
     
      );
    }
  }