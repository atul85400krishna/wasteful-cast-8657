const mongoose=require('mongoose')

const comprehensiveSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    image:String,
    title:String,



})

module.exports=mongoose.model('Comprehensive',comprehensiveSchema)