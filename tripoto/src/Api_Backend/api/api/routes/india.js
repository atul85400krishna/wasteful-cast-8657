const express=require('express');
const router=express.Router();
const India=require("../model/india")
const mongoose=require('mongoose')



router.get('/',(req,res,next)=>{
  India.find()
  .then(result=>{
    res.status(200).json({
        IndiaData:result
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
    India.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            india:result
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
   const india=new India({
     _id:new mongoose.Types.ObjectId,
    
     title:req.body.title,
     image:req.body.image,
     by:req.body.by,
   
   })
   india.save()
   .then(result=>{
    console.log(result);
    res.status(200).json({
        newIndia:result
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