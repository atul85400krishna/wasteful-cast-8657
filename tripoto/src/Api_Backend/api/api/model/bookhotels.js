const mongoose=require('mongoose')

const bookhotelsSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    img:String,
    title:String,
    place:String,
    cost:Number,
    days:String
  


})

module.exports=mongoose.model('Bookhotels',bookhotelsSchema)
// {
//     "id": 1,
//     "img": "https://cdn1.tripoto.com/media/filter/tst/img/2176903/Image/1660666126_image_covera.jpg",
//     "title": "Explore Auroville On A Cycle And Learn The Art Of Kalaripayattu | Beyond Community, Auroville",
//     "place": "Auroville",
//     "cost": 6700,
//     "days": "3 Days 2 Nights"
//   }