import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <form className="form-inline search-form">
        <div className="input-group col-12">
            <input type="text" className="form-control" placeholder="Search Weather" aria-label="Recipient's username" aria-describedby="button-addon2"/>
             <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fas fa-search-location "></i></button>
           </div>
       </div>
</form>
        )
    }
}

export default Search
