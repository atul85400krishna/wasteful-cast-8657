const mongoose=require('mongoose')

const packageSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    image:String,
    type:String,
    title:String,
    location:String,
    button:String,
    price:String,
    person:String,
    quotes:String,
    brand_logo:String,
    brand_name:String
  


})

module.exports=mongoose.model('Package',packageSchema)
// "id": 1,
//     "image": "https://cdn1.tripoto.com/media/filter/tst/img/1358540/Image/1560249767_mlex.jpg",
//     "type": "PACKAGE",
//     "title": "4 Days In Maldives",
//     "location": "Maldives",
//     "button": "4D-3N",
//     "price": "₹ 32,000",
//     "person": "/person",
//     "quotes": "Get Quotes",
//     "brand_logo": "https://cdn1.tripoto.com/media/filter/mss/img/411197/UserPhoto/1552395968_oyo.jpg",
//     "brand_name": "OYO Total Holidays"
//   },