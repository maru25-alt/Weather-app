import React, { Component } from 'react'
import {connect} from 'react-redux'
import Weekday from './Weekday'
import moment from 'moment'
import {getForecastData} from '../../store/action/weatherActions'
import PropTypes from 'prop-types';


export class WeekDays extends Component {
    componentWillMount(){
        this.props.getForecastData();
        console.log('mounted')
    }

   
    render() {
        var data = [];
        if(Object.entries(this.props.forecastData).length !== 0){
            data = this.props.forecastData && this.props.forecastData.list.filter(function (value) {
                return (moment(value.dt_txt).format(' h:mm:ss a')=== moment('2020-07-10 00:00:00').format(' h:mm:ss a'));
              });
        }
        return (
            <div className="forecast-container">
                <div className='row'>
                {data.map((d, index) => (
                      <Weekday data={d} key={index} day='Thursday' />
                ))}
                </div>
               
            </div>
        )
    }
}

WeekDays.propTypes = {
    forecastData: PropTypes.object.isRequired,
    getForecastData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    forecastData: state.WeatherReducer.forecastData
});

const mapActionsToProps = {
    getForecastData
}

export default connect(mapStateToProps, mapActionsToProps)(WeekDays)
