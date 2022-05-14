// add middlewares here related to actions
const Actions = require('./actions-model')

async function validateID(req,res,next){
    try{
        const action = await Actions.get(req.params.id)
        !action?
        res.status(404).json({message: ' no action found '})
        :
        req.action = action
        next()

    }catch(err){
        res.status(500).end()
    }
} 

function validateAction(req,res,next){
    const {project_id,description,notes} = req.body
    if(!project_id || !description || !notes){
        res.status(400).json({message:'missing required fields'})
    } else{
        next()
    }
}

module.exports = {
    validateID,
    validateAction

}