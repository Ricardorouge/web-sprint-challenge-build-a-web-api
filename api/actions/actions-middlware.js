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

module.exports = {
    validateID,
    
}