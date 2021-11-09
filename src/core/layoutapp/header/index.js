import React from "react";
import './index.css';
import {NavLink, Link} from 'react-router-dom';
import logo from "../header/icons/account.png"





const Header = () => {
    return (
        <header>
           
                <Link to= "/" className = "main-link">
                <div className= "logo"><p>APJ</p><p>Furniture</p></div>
                </Link>

                <nav>
                <NavLink to="/" activeClassName ="selected" className ="navigation-item-main">Home</NavLink>
            <NavLink to="/prodact" activeClassName ="selected" className ="navigation-item-rest">Prodact</NavLink>
            <NavLink to="/about" activeClassName ="selected"className ="navigation-item-rest">About</NavLink>
            <NavLink to="/contact" activeClassName ="selected"className ="navigation-item-rest">Contact</NavLink>
                </nav>
                <div className ="search-account-login">
           
           <button className = "account"><img src = {logo} alt = "account"></img></button>
        

           
            </div>
           
        </header>
    )
}

export default Header;

