const mongoose=require('mongoose')

const indiaSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    image:String,
    by:String,
  


})

module.exports=mongoose.model('India',indiaSchema)