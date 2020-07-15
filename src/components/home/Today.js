import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

export class Today extends Component {
    render() {
        let data = this.props.currentData
        let checkData = false;
        if(Object.entries(this.props.currentData).length !== 0){
            checkData = true
        }
       
     
        return (
            <>
                {checkData && <div  className="today">
                <div  className="today-header">
                    <div className="day">
                    <h6>Today</h6>
                    <div > {data.main.temp} <sup>o</sup>C</div>
                </div>
            </div> 
            <div className="temp">
                <div><span>Max:</span>{data.main.temp_max}</div>
                <div><span>Min:</span>{data.main.temp_min} </div>
            </div>
            <div className="today-content">
               <div>humidity {data.main.humidity} %</div>
               <div>wind &nbsp; &nbsp;{data.wind.speed} m/s</div>
               <div>pressure {data.main.pressure}hPa</div> 
            </div>
            <div>
              <div>{data.rain}</div>
              <div>{data.snow}</div>
                </div>
                </div>
                }

           </>

    
        )
    }
}

Today.propTypes = {
    currentData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    currentData: state.WeatherReducer.currentData
})

export default connect(mapStateToProps)(Today)
