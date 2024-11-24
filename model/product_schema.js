const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    stock: {
        type: Number, 
        // required: true
    },
    unlist: {
        type: Boolean, 
        default:false
    },
    images: {
        type: [String], 
    },
    description: {
        type: String,
        // required: true
    },
    offer:{
        type:Number
    },
    offerdealprice:{
        type:Number,
        default:0
    },
    dealoffertype:{
        type:String,
        enum:['percentage','fixed'],
        default:'percentage'
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        // required: true 
    },
    material:{
        type:[String]

    }
},{timestamps:true});






module.exports = mongoose.model('Product', productSchema);
