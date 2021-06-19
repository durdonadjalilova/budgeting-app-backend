const transactions = require("express").Router()
const transactionsArray = require("../models/transaction")

transactions.get("/",(req, res) => {
    res.json(transactionsArray)
})

transactions.get("/:id", (req, res)=>{
    const {id} = req.params
    const transaction= transactionsArray[id]
    if(transaction) {
    res.json(transaction)
} else {
    res.redirect('/404')
}
})

transactions.post("/", (req, res)=>{
    console.log('body', req.body)
    const {body} = req
    transactionsArray.push(body)
    const newId = transactionsArray.length-1
    res.json(transactionsArray[newId])
    // res.json(transactionsArray)
})

transactions.put("/:idx", (req, res) => {
    const { id } = req.params;
    const { body } = req;
    transactionsArray[id] = body;
    res.json(transactionsArray[id]);
  }); 

  transactions.delete("/:idx", (req, res) => {
    const { id } = req.params; 
    const deletedTransaction = transactionsArray.splice(id, 1);
    res.json(deletedTransaction[0]);
  });


module.exports = transactions