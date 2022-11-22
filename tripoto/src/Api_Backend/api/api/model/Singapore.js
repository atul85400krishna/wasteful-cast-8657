const mongoose=require('mongoose')

const imgeCrouselSchema=new mongoose.Schema({
    address: {
        _id:mongoose.Schema.Types.ObjectId,
        title:String,
        image:String,
        by:String,
        stays:String
    }
  


})

// const imgeCrouselSchem=new mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId,
//     title:String,
//     image:String,
//     by:String,
//     stays:String
  


// })
module.exports=mongoose.model('imgeCrousel',imgeCrouselSchema)
// module.exports=mongoose.model('imgeCrouse',imgeCrouselSchem)



