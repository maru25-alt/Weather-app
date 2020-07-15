import React, { Component } from 'react'
import Today from '../components/home/Today'
import WeekDays from '../components/home/WeekDays'

export class Home extends Component {
  
    render() {
        return (
            <div className="home">
            <div className="home-content">
              <div className="row ">
                <div className="col-md-3 col-sm-12" >
                  <Today/>
                </div>
                <div className="col-md-9 col-sm-12">
                    <WeekDays/>
                </div>
            </div>
            </div>
           
          </div>
        )
    }
}

export default (Home)
