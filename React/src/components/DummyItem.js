//Safu Speak is a dApp created for the Binance Hackathon
//The smart contract enables content creation
//as well as metric tracking and other logic
//When coupled with the frontend, it creates an experience similar to a 
//traditional blog style social website such as medium and reddit
//Created By Harnick Khera (Github.com/Hephyrius)
//Repository can be found at (Github.com/Hephyrius/SafuSpeak)

import React, { Component } from 'react';
class DummyItem extends Component {

  render() {
      let type = "Comment";
      if(this.props.isPost) {
        type = "Post"
      }
    return (
      <div className="DummyItem">
        <div class="container">
            <div class="row">
              There are no {type}'s to display. This may be because you aren't connected to the Binance Smart Chain Testnet using MetaMask or another web3 wallet. If you are connected, try refreshing the page to load events from the Smart Chain EVM. If no events are shown, try pointing your binance chain to another server.
            </div>
          </div>
        </div>
    );
  }
}

export default DummyItem;
