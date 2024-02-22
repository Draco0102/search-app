import React from "react";
import logo from '../../../assets/images/logo.png'
export default function Navbar() {
  return (
    <div className={`nav_container`}>
    <img className={`main_logo`} src={logo} alt={'logo'} />
      <ul>
        <li className={`header_list`}>About</li>
        <li className={`header_list`}>Products</li>
        <li className={`header_list`}>Pricing</li>  
        <li className={`header_list`}>Home</li>
      </ul>
    </div>
  );
}
