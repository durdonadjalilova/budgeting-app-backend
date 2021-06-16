const transactions = require("express").Router()
const transactionsArray = require("../models/transaction")

transactions.get("/",(req, res) => {
    res.json(transactionsArray)
})

transactions.get("/:id", (req, res)=>{
    // console.log(req.params)
    const {id} = req.params
    const transaction= transactionsArray[id]
    if(transaction) {
    res.json(transaction)
} else {
    res.redirect('/404')
}
})

module.exports = transactions