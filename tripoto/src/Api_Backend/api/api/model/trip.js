const mongoose=require('mongoose')

const tripSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    image:String,
    by:String,
  


})

module.exports=mongoose.model('Trip',tripSchema)
// {
//     "id": 1,
//     "title": "From Istanbul to Cappadocia: How To Experience Turkey's Balloon-Filled Skies And Artistic Treasures",
//     "image": "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664283239_1491999123_screen_shot_2017_04_12_at_5_41_22_pm.png",
//     "by": "Tripoto"
//   }