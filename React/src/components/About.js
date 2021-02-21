//Safu Speak is a dApp created for the Binance Hackathon
//The smart contract enables content creation
//as well as metric tracking and other logic
//When coupled with the frontend, it creates an experience similar to a 
//traditional blog style social website such as medium and reddit
//Created By Harnick Khera (Github.com/Hephyrius)
//Repository can be found at (Github.com/Hephyrius/SafuSpeak)

import React, { Component } from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="About">
        <div class="container">
            <div class="row">
            <form onSubmit={this.handleSubmit}>
                <div>

                <p align="justify">
                <h4> SafuSpeak Binance dApp</h4> 
                <p><strong> Binance Smartchain Testnet Deployed Address - 0xb2783Fc46A841350de80F6B6b562e3Afd16d22E3</strong> </p>
                <p><strong> SafuSpeak is in early stages!</strong> </p>
                <p><strong> Made for the Binance Hackathon Hackathon</strong> </p>
                <p><strong> Creator - Harnick Khera (Github.com/Hephyrius)</strong> </p>
                </p>

                <p align="justify">
                <h4>What is SafuSpeak</h4>
                SafuSpeak is a dApp media platform. The platform allows users to share content with other users, akin to platforms such as medium or reddit. It leverages the BSC event system as a means of storing content in an immutable fashion. The platform allows users to reward the content they like with donations (in BNB). The dApp also makes use of BSC EVM Smart Contracts to keep track of statistics such as Votes and Donations. There is no fee model for this dApp (yet), other than the Gas cost for functions. it is freely useable in it current form. 
                The dApp essentially uses BSC nodes as a server, and BSC as a database, whilst the frontend acts as the client. The dApp allows the user to tap directly into a BSC EVM api of their choice (via MetaMask or other Web3 client settings). Due to the fact that no data is stored offchain it is (theoretically) near impossible to censor.
                </p>

                <p align="justify">
                <h4>Why is it needed</h4>
                Being Censorship Resistant is a very important concept for the modern internet, which is under constant assault by government censorship and manipulation by shadowy organisations and private interests. Another area where this concept is important is in the realm of content policing and cancel culture, modern social platforms often alienate fringe communities with broad rules that can often push users to darker platforms or echo chambers. This is evident in many cases, with the recent parlor ban being one such controversial case.  Another need for this dApp is the case of data harvesting. The dApp only records bare bone facts about a user to the blockchain and does not track users in any form. This is appealing in the post camebridge-analytica social domain where people are normally the commodity!.
                </p>

                </div>
            </form>
            </div>
        </div>
      </div>
    );
  }
}

  export default About;
