import React, { Component } from 'react'

export class AboutForm extends Component {
    render() {
        return (
            <>
             <div>
                <h3>Subcribe to our Newsletter</h3>
                <form >
                <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn button" type="button" id="button-addon2">Submit</button>
                </div>
                </div>
                </form>
           </div>
        <div>
            <h5>Contact Us On:</h5>
            <ul>
                <li><p><i class="fas fa-phone-alt"></i> &nbsp; &nbsp;&nbsp; 15678349567 </p></li>
                <li><p><i class="fas fa-envelope"></i> &nbsp; &nbsp; &nbsp;cloudburst@gmail.com</p></li>
            </ul>
            <h5>Follow Us On:</h5>
            <ul class="social-icons">
                <li><a href="/"><i class="fab fa-facebook"></i></a></li>
                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                <li><a href="/"><i class="fab fa-youtube"></i></a></li>
            </ul>

        </div>
        </>
           
        )
    }
}

export default AboutForm
