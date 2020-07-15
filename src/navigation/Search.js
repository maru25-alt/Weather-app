import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getData} from '../store/action/weatherActions'

export class Search extends Component {
    state={
        search: ''
    }
    handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getData(this.state.search);
        this.setState({
            search: '',
        })

        
    }
    render() {
        return (
            <form className="form-inline search-form" onSubmit={this.handleSubmit}>
        <div className="input-group col-12">
            <input type="text" id="search" value={this.state.search} onChange={this.handleChange} className="form-control"  aria-label="Recipient's username" placeholder="Enter your location..." aria-describedby="button-addon2"/>
             <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="fas fa-search-location "></i></button>
           </div>
       </div>
</form>
        )
    }
}



export default connect(null, {getData})(Search)
