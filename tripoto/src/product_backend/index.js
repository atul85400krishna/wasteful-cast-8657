require("dotenv").config()
const express=require("express")
const {connection} =require("./configs/db")
// import tripRoute from "./router/trip.route"
const tripRouter=require("./router/trip.route")


const cors=require("cors")

const app=express()
app.use(express.json())

app.use(cors({
  origin:"*"
})
);
const PORT=process.env.PORT ||3000

// app.use("/mumbai",tripRouter)
app.use("/mumbai",tripRouter)


app.listen(PORT,async()=>{
    try{
      await connection
      console.log("connteced sucessfully")
    }catch(err){
        console.log("ERROR to connnect to db")

        console.log(err)
        

    }

    console.log(`Listening at http://localhost:${PORT}`)
})