import React, { Component } from 'react'
import img from '../../assets/images/icon-13.svg'
import PropTypes from 'prop-types';
import moment from 'moment'

export class Weekday extends Component {
    render() {
        let {data} = this.props
        return (
           
            <div className="forecast">
            <div className="forecast-header ">
            
              <h6>{moment(data.dt_txt).format('dddd')}</h6>
            </div>
            <div className="forecast-icon">
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}  width="48" />
                <div className='description'>{data.weather[0].description}</div>
            </div>
            <div className="forecast-content">
                <div className="degree">{data.main.temp_max}<sup>o</sup>C</div>
                <small>{data.main.temp_min}<sup>o</sup>C</small>
            </div>
           
         </div>
       
        )
    }
}

Weekday.propTypes = {
    data: PropTypes.object.isRequired,
    day: PropTypes.string.isRequired
    
};

export default Weekday
