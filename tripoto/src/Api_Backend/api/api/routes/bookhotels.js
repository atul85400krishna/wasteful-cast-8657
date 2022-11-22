const express=require('express');
const router=express.Router();
const Bookhotels=require("../model/bookhotels")
const mongoose=require('mongoose')



router.get('/',(req,res,next)=>{
    Bookhotels.find()
  .then(result=>{
    res.status(200).json({
        BookhotelsData:result
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
    Bookhotels.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            bookhotels:result
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
   const bookhotels=new Bookhotels({
     _id:new mongoose.Types.ObjectId,
     img:req.body.image,
     title:req.body.title,
     place:req.body.place,
     cost:req.body.cost,
     days:req.body.days,
   
   })
   bookhotels.save()
   .then(result=>{
    console.log(result);
    res.status(200).json({
        newBookhotels:result
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
