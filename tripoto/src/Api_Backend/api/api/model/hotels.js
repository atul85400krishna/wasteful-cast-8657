const mongoose=require('mongoose')

const hotelsSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    image:String,
    by:String,
    stays:String
  


})

module.exports=mongoose.model('hotels',hotelsSchema)
// {
//     "id": 1,
//     "title": "Unwind At The Vedic Village Spa Resort in Kolkata",
//     "image": "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284466_1501572387_vedicvillage1.jpg",
//     "by": "Aakanksha Magan",
//     "stays": "Luxury Stays"
//   }