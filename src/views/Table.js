import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTableData} from '../store/action/weatherActions'
import Current from '../components/table/Current'
import Daily from '../components/table/Daily'
import Hourly from '../components/table/Hourly'
import PropTypes from 'prop-types';
export class Table extends Component {
    componentWillMount(){
        this.props.getTableData()
    }
    render() {
        let {tableData} = this.props
        return (
            <div className="page-container">
              
               <Current data={tableData.current}/>
               <Daily data={tableData.daily}/>
               <Hourly data={tableData.hourly}/>
            </div>
        )
    }
}


Table.propTypes = {
    tableData: PropTypes.object.isRequired
 };

const mapStateToProps = (state) =>({
    tableData: state.WeatherReducer.tableData
})

export default connect(mapStateToProps, {getTableData})(Table)
