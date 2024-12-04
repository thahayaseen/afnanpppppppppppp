const mongoose=require('mongoose')

const schemas=mongoose.Schema({
    types:[{
        type:String
    }]

},{timestamps:true})
module.exports=mongoose.model('Ptype',schemas)