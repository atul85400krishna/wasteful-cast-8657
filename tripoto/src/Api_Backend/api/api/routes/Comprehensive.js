const express=require('express');
const router=express.Router();
const Comprehensive=require("../model/Comprehensive")
const mongoose=require('mongoose')



router.get('/',(req,res,next)=>{
    Comprehensive.find()
  .then(result=>{
    res.status(200).json({
        ComprehensiveData:result
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
    Comprehensive.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            comprehensive:result
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
   const comprehensive=new Comprehensive({
     _id:new mongoose.Types.ObjectId,
     image:req.body.image,
    
     title:req.body.title,
     
   
   })
   comprehensive.save()
   .then(result=>{
    console.log(result);
    res.status(200).json({
        newComprehensive:result
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
