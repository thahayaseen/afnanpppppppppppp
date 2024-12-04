const mongoose = require('mongoose');
let types=mongoose.Schema({
    key:String,
    value:Array
})
// Define the category schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true 
    },
    description: {
        type: String,
        required: true
    },
    list:{
        type:Boolean,
        default:true
    },
    types:{
       type: [types]
    }
}, { timestamps: true });


module.exports = mongoose.model('Category', categorySchema);
