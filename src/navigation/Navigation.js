import React, { Component } from 'react'
import SearchBar from "./Search.js"
import logo from '../assets/images/logo.jpg'
export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
            <nav className="navbar navbar-expand-lg ">
                  <a className="navbar-brand" href="/">
                      <img className="logo" src={logo} alt="logo"/> 
                 </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars fa-2x"></i>
             </button>
              
             <div className="link-items collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <div className="search_bar">
                       <SearchBar></SearchBar>      
               </div>
               <ul className="navbar-nav nav_links justify-content-end">
                 <li className="nav-item">
                   <a className="nav-link link" href="/map">Map</a>
                 </li>
                  <li className="nav-item">
                   <a className="nav-link link" href="/about">About</a>
                 </li>
                 <li className="nav-item dropdown">
                   <a className="nav-link dropdown-toggle link" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                   </a>
                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <a className="dropdown-item link" href="/table">7 Day Weather Forecast</a>
                     <a className="dropdown-item link" href="/forecast">1 Month Weather Forecast</a>
                     <a className="dropdown-item link" href="/graph">Weather Graphs</a>
                     
            
                   </div>
                 </li>
               </ul>
             </div>
             </nav>
           <div className="nav_date">
             <h3 className="nav_date_location"> city , <span className="date">today</span></h3>
           </div>
         </div>   
        )
    }
}

export default Navigation
