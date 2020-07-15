import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Daily extends Component {
    state = {
        width: 550,
        height: 350
    }
    
    render() {
      
        return (
            <div>
                daily
               <svg></svg>
            </div>
        )
    }
}

Daily.propTypes = {
    data: PropTypes.array
 };

export default Daily
