// Write your "actions" router here!
const express = require('express')
const Actions = require('./actions-model')
const {validateID} = require('./actions-middlware')

const router = express.Router()

router.get('/',(req,res,next)=>{
    Actions.get()
    .then(action=>{
        action?
        res.json(action)
        :
        res.json([])
    })
    .catch(next)
})

router.get('/:id',validateID,(req,res,next)=>{
    res.json(req.action)
})


module.exports = router