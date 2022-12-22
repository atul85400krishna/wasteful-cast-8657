const express=require("express")
// const {TripModel} =reuire("../model/trip.model")
const { TripModel } =require("../model/trip.model")

const tripRoute=express.Router()


tripRoute.get("/",async(req,res)=>{
    try{
       const trip = await TripModel.find({category:"Overview"})
       res.status(200).json(trip)
    }catch(err){
        res.status(201).json(err)
    }
})

tripRoute.get("/trip",async(req,res)=>{
    try{
       const trip = await TripModel.find({category:"Trips"})
       res.status(200).json(trip)
       
    }catch(err){
        res.status(201).json(err)
    }
})

// tripRoute.get("/place",async(req,res)=>{
//     try{
//        const trip = await TripModel.find({category:"Places"})
//        res.status(200).json(trip)
//     }catch(err){
//         res.status(201).json(err)
//     }
// })

// tripRoute.get("/hotel",async(req,res)=>{
//     try{
//        const trip = await TripModel.find({category:"hotels"})
//        res.status(200).json(trip)
//     }catch(err){
//         res.status(201).json(err)
        
//     }
// })

// tripRoute.get(":key",async(req,res)=>{
//     let data= await TripModel.find({
//         "$or":[
//         {"category":{$regex:req.params.key}}
//         ]
    
//     })
// })









tripRoute.post("/create",async(req,res)=>{
    const payload=req.body;
    try{
       const newtrip = new TripModel(payload);
       await newtrip.save()
       res.status(200).json(newtrip)
      
    }catch(err){
        res.status(201).json(err)
    }
})

module.exports = tripRoute;