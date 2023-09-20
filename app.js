import express from "express";
const app = express();
import { ENS } from '@ensdomains/ensjs'
import { ethers } from 'ethers'

app.post('/', (req, res) => {
  res.send('hello world')
  // console.log(req.body.user.walletadrr);

})

app.get('/:gtwallet', (req, res) => {
  const ensDomainName = req.params.gtwallet;
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/3cbe5a48c6d64e85814f058cf4e59bea')
  async function main() {
  
      const ENSInstance = new ENS()
      await ENSInstance.setProvider(provider)
      const profile = await ENSInstance.getProfile(ensDomainName, {
        texts: true
      })
    console.log(JSON.stringify(profile));
    res.send(JSON.stringify(profile));
    }
    
    main();


})

app.listen(3677, () => {
  console.log("ENS records ENSR Server running on port 3677");
 });