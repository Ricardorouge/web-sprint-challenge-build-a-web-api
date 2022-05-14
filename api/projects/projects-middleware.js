// add middlewares here related to projects

const Projects = require('./projects-model')

function validateProject(req,res,next){
    const {name,description} = req.body
    if(!name || !description){
        res.status(400).json({message:'you must provide a name and description'})
    } else{
        next()
    }
}
function validateUpdate(req,res,next){
    const {name,description,completed} = req.body
    if(!name || !description || completed==null){
        res.status(400).json({message:'you must provide a name and description'})
    } else{
        next()
    }
}

async function validateID(req,res,next){
    try{
        const project = await Projects.get(req.params.id)
        !project?
        res.status(404).json({message:'no project found'})
        :
        req.project=project
        next()

    }catch(err){
        res.status(500).end()
    }
}

module.exports = {
    validateProject,
    validateID,
    validateUpdate
}