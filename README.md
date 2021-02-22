# SafuSpeak - Binance Smart Chain Censorship Resistant Social Platform.

## Testnet Deployed Address - 0x666A2829A371275073801d85Bcf70C9856FB638B 

###### NOTE: The first time you load the app you must refresh atleast once for the events populated from the EVM to populate the dApp

## Made for the Binance Smartchain Hackathon
## Creator - Harnick Khera (Hephyrius)
## Live dApp Website [SafuSpeak.com](https://SafuSpeak.com)
##### [quick VIDEO of submission of dApp](https://youtu.be/DFyl1qRU2oo)
[![](http://img.youtube.com/vi/DFyl1qRU2oo/0.jpg)](http://www.youtube.com/watch?v=DFyl1qRU2oo "quick VIDEO of submission of dApp")

## What is SafuSpeak
SafuSpeak is a dApp media platform. The platform allows users to share content with other users, akin to platforms such as medium or reddit. It leverages the BSC EVM event system as a means of storing content in an immutable fashion. The platform allows users to reward the content they like with donations (in trx). The dApp also makes use of Binance SmartContracts to keep track of statistics such as Votes and Donations. There is no fee model for this dApp, other than the Gas cost for functions. it is freely useable in it current form. 

The dApp essentially uses RPC nodes as a server, and BSC as a database and handler, whilst the frontend acts as the client and peices it all together. The is dApp allows the user to tap directly into a BSC node of their choice (via binance chain settings). Due to the fact that no data is stored offchain it is near impossible to censor.

## Why is it needed

Being Censorship Resistant is a very important concept for the modern internet, which is under constant assault by government censorship and manipulation by shadowy organisations and private interests. Another area where this concept is important is in the realm of content policing and cancel culture, modern social platforms often alienate fringe communities with broad rules that can often push users to darker platforms or echo chambers. This is evident in many cases, with the recent parlor ban being one such controversial case. Another need for this dApp is the case of data harvesting. The dApp only records bare bone facts about a user to the blockchain and does not track users in any form. This is appealing in the post camebridge-analytica social domain where people are normally the commodity!.
## Development and Deployment

### Tech Stack and Dependencies

NodeJS
Web3
react-quill
react-tabs
material-ui/core
ReactJS
Bootstrap
jQuery
yarn

### Deploying the smart contract

with /solidity/ as the current directory first compile all contracts by using 

``` 
truffle compile
```

followed by deploying to the blockchain via:

``` 
truffle migrate --network testnet
```


### Frontend 

this section assumes /react/ is the current directory

#### Development mode

You can launch nofilter in react development mode by running

```
yarn start
```

#### Compiling

the frontend can be compiled using 

```
yarn dev
```

#### Hosting

We can host the compiled files using pm2 and serve (
```
npm install -i -g pm2
npm install -i -g serve
```

and then we can deploy on our server using the following command with the compiled files in the same current directory

```
pm2 serve build
```

this deploys the frontend to port 8080


