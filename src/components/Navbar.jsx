import React from "react";
import logo from "../images/logo.png"


export default function Navbar() {
 return <div className="navbar"> 
      <div id="logo">
            <img src={logo} alt="logo" />
          </div> 
        <ul>
          <li>Home</li>
           <li>products</li>
           <li>favorite</li>
           <li>Cart</li>

            
          </ul> 
          

         </div>;
}
