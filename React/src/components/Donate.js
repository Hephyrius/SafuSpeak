//Safu Speak is a dApp created for the Binance Hackathon
//The smart contract enables content creation
//as well as metric tracking and other logic
//When coupled with the frontend, it creates an experience similar to a 
//traditional blog style social website such as medium and reddit
//Created By Harnick Khera (Github.com/Hephyrius)
//Repository can be found at (Github.com/Hephyrius/SafuSpeak)

import React, { Component } from 'react';
import {DonateBNB} from "../utils/binanceweb";

class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BNBValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({BNBValue: event.target.value});
  }

  handleSubmit(event) {
    DonateBNB(this.props.postid, this.state.BNBValue);
    event.preventDefault();
  }

  render() {
    let userData = JSON.parse(localStorage.getItem("User"))
    return (
    <div className="Donate">
        <div class="container">
            <div class="row">

            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="number" value={this.state.BNBValue} onChange={this.handleChange} /> BNB
                </div>
                <p></p>

                <p><strong> You currently have a contract balance of {Number(userData['SunBalance'])/1000000}BNB</strong></p>

                <input type="submit" class="btn btn-outline-dark" value="Donate" />

                              <p></p>
                <strong>Post Has Earned: {this.props.donation['BNBDonation']}BNB </strong> 
                
              <p></p>
            </form>
            </div>
        </div>
      </div>
    );
  }
}

  export default Donate;
