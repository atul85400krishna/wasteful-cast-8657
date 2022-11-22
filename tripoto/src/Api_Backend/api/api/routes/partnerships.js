const express=require('express');
const router=express.Router();
const Partnerships=require("../model/partnerships")
const mongoose=require('mongoose')



router.get('/',(req,res,next)=>{
    Partnerships.find()
  .then(result=>{
    res.status(200).json({
        PartnershipsData:result
    })
  })
  .catch(err=>{
    console.log(err)
    res.status(500).json({
        error:err
    })

  })
})
//for id catch
router.get('/:id',(req,res,next)=>{
    console.log(req.params.id)
    Partnerships.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            Partnerships:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err

        })
    })

})


router.post('/',(req,res,next)=>{
   const partnerships=new Partnerships({
     _id:new mongoose.Types.ObjectId,
      title:req.body.title,
     image_top:req.body.image_top,
     image_mid:req.body.image_mid,
     image_bottom:req.body.bottom,
      about_p1:req.body. about_p1,
      about_p2:req.body.about_p2,
      about_p3:req.body. about_p3,
      about_p4:req.body.about_p4,
      activity_p1:req.body.activity_p3,
      activity_p2:req.body.activity_p3,
      activity_p3:req.body.activity_p3,
      discreption:req.body.discreption,
      author:req.body.author,
 
     
   })
   partnerships.save()
   .then(result=>{
    console.log(result);
    res.status(200).json({
        newPartnerships:result
    })
   })
   .catch(err=>{
    console.log(err)
    res.status(404).json({
        error:err
    })
   })
})
module.exports=router