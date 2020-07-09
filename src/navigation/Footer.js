import React, { Component } from 'react'
import logo from '../assets/images/logo.jpg'
export class Footer extends Component {
    render() {
        return (
            <div class="footer">
         <div class="footer-logo">
             <img src={logo} alt="logo" width="80" /> 
        </div> 
       <p class="footer_text">
           &copy;All rights reserved CloudBurst 2020  
       </p>
    </div>
        )
    }
}

export default Footer
