import React from "react";

import google from "../trusted/logo-img/google.png";
import Toko from "../trusted/logo-img/toko.png"
import microsoft from "../trusted/logo-img/microsoft.png"
import ticket from "../trusted/logo-img/ticket.png"
import "../trusted/index.css"


const TrustedComoanies = () => {
    return (
      <div className = "trusted-wrapper">
          <p>Some of our trusted company</p>
          <div classname = "companies">
              
              <a href = "https://about.google/" className = "link"><img src ={google} alt = "google"></img></a>
              <a href = "https://about.google/" className = "link"><img src ={Toko} alt = "google"></img></a>
              <a href = "https://about.google/" className = "link"><img src ={microsoft} alt = "google"></img></a>
              <a href = "https://about.google/" className = "link"><img src ={ticket} alt = "google"></img></a>
        </div>


      </div>
        
    )
}

export default TrustedComoanies;
