import React, { Component } from 'react'
import SearchBar from "./Search.js"
import logo from '../assets/images/logo.jpg'
import {connect} from 'react-redux'
import {getTodayData} from '../store/action/weatherActions'
import PropTypes from 'prop-types';
import moment from 'moment'
export class Navigation extends Component {
    state={
        today: moment().format('MMMM Do YYYY'),
    }
    componentWillMount(){
        this.props.getTodayData()
    }
    render() {
     console.log(this.props)
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
                   <a className="nav-link dropdown-toggle link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                   </a>
                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <a className="dropdown-item link" href="/table">5 Day Weather Forecast</a>
                     <a className="dropdown-item link" href="/table">1 Month Weather Forecast</a>
                     <a className="dropdown-item link" href="/graph">Weather Graphs</a>
                     
            
                   </div>
                 </li>
               </ul>
             </div>
             </nav>
           <div className="nav_date">
        <h3 className="nav_date_location"> {this.props.city} , <span className="date">{this.state.today}</span></h3>
           </div>
         </div>   
        )
    }
}

Navigation.propTypes = {
    city: PropTypes.string.isRequired,
    getTodayData: PropTypes.func.isRequired
};
const mapStateToProps = (state) =>({
    city: state.WeatherReducer.city

})

const mapActionsToProps = {
    getTodayData
}

export default connect(mapStateToProps, mapActionsToProps)(Navigation)
