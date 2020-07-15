import React, { Component } from 'react'
import AboutContent from '../components/about/About' 
import Aboutform from '../components/about/AboutForm'
export class About extends Component {
    render() {
        return (
        <div className="page-container">
            <div class="about">
                 <div class="about_container">
                    <div class="row " >
                        <div class="about_section col-md-7 col-sm-12">
                            <AboutContent></AboutContent>
                        </div>
                        <div class="about_form col-md-4 col-sm-12">
                            <Aboutform></Aboutform>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default About
