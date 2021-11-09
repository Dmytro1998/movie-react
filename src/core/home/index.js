

import React from "react";
import "../home/index.css"
import TrustedComoanies from "../layoutapp/trusted";




 class Home extends React.Component {
    render() {
      return (
          <>
     <div className= "home-page">
       <div className = "help-you-to-make">
<h1>Help you to Make modern Funiture</h1>
<p>We help you to create organize your room to be more cozy, design by professional interior designer</p>
<button className = "products-btn">See Our Product</button>
       </div>
       <div className = "yellow-background">
         <div className ="slider">
           



         </div>


       </div>
         </div>
      <TrustedComoanies/>
     </>
      );
    }
  }
  export default Home