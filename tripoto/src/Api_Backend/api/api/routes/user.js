const express = require("express");
const router = express.Router();
const User = require("../model/user");
const mongoose = require("mongoose");

const bcrypt = require('bcrypt');


router.post("/", (req, res, next) => {
 
      const user = new User({
        _id:new mongoose.Types.ObjectId,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        email: req.body.email,
        userType: req.body.userType,
      })
      user.save()
    //   .then(result=>{
    //     res.status(200).json({
    //         new_user:result
    //     })
    //   })
    //   .catch(err=>{
    //     res.status(500).json({
    //         error:err
    //     })
    .then(result=>{
           console.log(result);
           res.status(200).json({
               user:result
           })
          })
          .catch(err=>{
           console.log(err)
           res.status(404).json({
               error:err
           })
          })
   
})
// const student=new Student({
//     _id:new mongoose.Types.ObjectId,
//     name:req.body.name,
//     email:req.body.email,
//     gender:req.body.gender,
//     phone:req.body.phone,
//   })
//   student.save()
//   .then(result=>{
//    console.log(result);
//    res.status(200).json({
//        newStudent:result
//    })
//   })
//   .catch(err=>{
//    console.log(err)
//    res.status(404).json({
//        error:err
//    })
//   })

module.exports = router