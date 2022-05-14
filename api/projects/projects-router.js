// Write your "projects" router here!
const express = require('express')
const Projects = require('./projects-model')
const {validateProject,validateID,validateUpdate} = require('./projects-middleware')

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

router.get('/:id',validateID,(req,res,next)=>{
   res.json(req.project)
})

router.post('/',validateProject,(req,res,next)=>{
    Projects.insert(req.body)
    .then(project=>{
        res.json(project)
    })
    .catch(next)  
})

router.put('/:id',validateID,validateUpdate,(req,res,next)=>{
    Projects.update(req.params.id,req.body)
    .then(result=>{
        res.json(result)
    })
    .catch(next)
})

router.delete('/:id',validateID,(req,res,next)=>{
    Projects.remove(req.params.id)
    .then(result=>{
        res.end()
    })
    .catch(next)
})

router.get('/id/actions',(req,res,next)=>{
    
})

module.exports = router