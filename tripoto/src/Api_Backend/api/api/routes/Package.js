const express=require('express');
const router=express.Router();
const Package=require("../model/Package")
const mongoose=require('mongoose')



router.get('/',(req,res,next)=>{
    Package.find()
  .then(result=>{
    res.status(200).json({
        PackageData:result
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
    Package.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            package:result
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
   const package=new Package({
     _id:new mongoose.Types.ObjectId,
     image:req.body.image,
     type:req.body.type,
     title:req.body.title,
     location:req.body.location,
     button:req.body.button,
     price:req.body.price,
     person:req.body.person,
     quotes:req.body.quotes,
     brand_logo:req.body.brand_logo,
     brand_name:req.body.brand_name
    
     
   
   })
   package.save()
   .then(result=>{
    console.log(result);
    res.status(200).json({
        newPackage:result
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
