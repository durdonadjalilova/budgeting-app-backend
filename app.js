const express = require("express");
const cors = require('cors');
const transactionsController = require("./controllers/transactions")

const app = express();
app.use(express.json());
app.use(cors());

app.use((res, req, next)=>{
  console.log(`${req.method} request made at ${req.url}`)
  next()
})

app.use("/transactions", transactionsController)

app.get("/", (req, res) => {
  res.send("Basic Express App - ROOT");
});

app.get("*", (req, res)=>{
  res.status(404).send("Page Not Found")
}
)

module.exports = app;
