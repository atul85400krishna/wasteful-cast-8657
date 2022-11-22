const express=require('express');
const router=express.Router();
const Student2=require("../model/student2")
const mongoose=require('mongoose')



router.get('/',(req,res,next)=>{
  Student2.find()
  .then(result=>{
    res.status(200).json({
        student2Data:result
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
    Student2.findById(req.params.id)
    .then(result=>{
        res.status(200).json({
            student2:result
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
   const student2=new  Student2({
     _id:new mongoose.Types.ObjectId,
     name:req.body.name,
     email:req.body.email,
     gender:req.body.gender,
     phone:req.body.phone,
   })
   student2.save()
   .then(result=>{
    console.log(result);
    res.status(200).json({
        newstudent2:result
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