// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')

const router = express.Router()

router.get('/',(Req,res,next)=>{
    Projects.get()
    .then(result=>{
        result?
        res.json(result)
        :
        res.json([])
    })
    .catch(next)
})



module.exports = router