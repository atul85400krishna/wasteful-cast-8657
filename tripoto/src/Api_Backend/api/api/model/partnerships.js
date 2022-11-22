
const mongoose=require('mongoose')

const partnershipsSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    image_top:String,
    image_mid:String,
    image_bottom:String,
     about_p1:String,
     about_p2:String,
     about_p3:String,
     about_p4:String,
     activity_p1:String,
     activity_p2:String,
     activity_p3:String,

     discreption:String,
     author:String


})

module.exports=mongoose.model('Partnership',partnershipsSchema)

// "title": "Experience the Best of Monsoon With These Trendy goSTOPS Stays Under Rs 2,000",
// "image_top": "https://static2.tripoto.com/media/filter/nl/img/533625/Image/1659596283_cover.jpeg",
// "image_mid": "https://cdn1.tripoto.com/media/filter/nl/img/533625/Image/1659596310_munnar.jpeg",
// "image_bottom": "https://cdn1.tripoto.com/media/filter/nl/img/189626/Image/1662995279_ooty_3.png",
// "discreption"