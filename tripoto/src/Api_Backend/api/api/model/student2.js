const mongoose=require('mongoose')

const student2Schema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    gender:String,
    phone:Number,


})

module.exports=mongoose.model('Student2',student2Schema)