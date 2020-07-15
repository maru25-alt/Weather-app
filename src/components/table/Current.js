import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment'

export class Current extends Component {
    render() {
        let data = {};
         if(typeof(this.props.data) !== "undefined"){
             data = this.props.data
         }
         let isTrue = typeof(this.props.data) !== "undefined" ? true : false
        
        return (
            <div>
                <table className="table table-bordered">
                    <thead className="thead-dark  ">
                        <tr>
                        <th scope="col">Current Time</th>
                        <th scope="col">Clouds %</th>
                        <th scope="col">Dew Point <sup>o</sup>C</th>
                        <th scope="col">Humidy %</th>
                        <th scope="col">Pressure hPa</th>
                        <th scope="col">Temperature <sup>o</sup>C</th>
                        <th scope="col">Weather</th>
                        <th scope="col">Wind Speed  metre/sec</th>
                        <th scope="col">Wind Direction deg</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                       <td> {moment().format('h:mm:ss a')}</td>
                        <td>{data.clouds}</td>
                        <td>{data.dew_point}</td>
                        <td>{data.humidity}</td>
                        <td>{data.pressure}</td>
                       
                        <td>{data.temp}</td>
                        <td>
                            {isTrue && <div>
                               
                                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon"></img>
                                <h6>{data.weather[0].description}</h6>
                            </div>}
                        </td>
                        <td>{data.wind_speed}</td>
                        <td>{data.wind_deg}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
Current.propTypes = {
   data: PropTypes.object
};

export default Current
