const express=require('express');
const router=express.Router();
const Trip=require("../model/trip")
const mongoose=require('mongoose')



router.get('/',(req,res,next)=>{
  Trip.find()
  .then(result=>{
    res.status(200).json({
        TripData:result
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
    Trip.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            trip:result
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
   const trip=new Trip({
     _id:new mongoose.Types.ObjectId,
    
     title:req.body.title,
     image:req.body.image,
     by:req.body.by,
   
   })
   trip.save()
   .then(result=>{
    console.log(result);
    res.status(200).json({
        newTrip:result
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