import React, { Component } from 'react'
import Map  from '../components/map/Map'
import Options from '../components/map/Options'
import {connect} from 'react-redux'
import {getMapData} from '../store/action/weatherActions'
export class MapContainer extends Component {
    componentWillMount() {
        this.props.getMapData()
    }
    render() {
        return (
            <div className="page-container">
        <div className="row">
            <div className="col-md-3 col-sm-2">
                <Options/>
            </div>
            <div className="col-md-9 col-sm-10">
                <Map  map={this.props.map}/>
            </div>
        </div>
    </div>
        )
    }
}

const mapStateToProps = (state) => ({
    map: state.WeatherReducer.map
})

export default connect(mapStateToProps, {getMapData})(MapContainer)