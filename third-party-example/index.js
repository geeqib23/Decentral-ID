const express = require("express");
const app = express();
const Web3 = require('web3');
require('dotenv').config()

const PORT = process.env.PORT || 3050;

const { contractABI, contractAddress } = require("./utils/constants");
const address = process.env.ADDRESS;

const provider = new Web3.providers.HttpProvider(process.env.ETHEREUM_NODE_URL);
const web3 = new Web3(provider);
const smartContract = new web3.eth.Contract(contractABI, contractAddress);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { address, self_url: process.env.SELF_URL });
});

app.get("/callback", (req, res) => {
  if (req.query.status === '200')
  {
    let name, isOver18;
    smartContract.methods.showUserInfoByOrg(req.query.user).call({ from: address }).then(data => {
      name = data.name;
      smartContract.methods.showUserInfoBoolsByOrg(req.query.user).call({ from: address }).then(data => {
        isOver18 = data.isOver18;
        
        if (isOver18)
          res.render("home", { name });
        else
          res.render("not_allowed");
      });
    });
  }
  else
  {
    res.render("not_allowed");
  }
});

app.listen(PORT, () => {
  console.log(`[SERVER:EXT] STARTED`);
});
