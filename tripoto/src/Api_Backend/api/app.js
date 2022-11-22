const express=require('express')
const app =express()
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const studentRoute=require('./api/routes/student')
const facultyRoutes=require('./api/routes/faculty')
const userRoute=require('./api/routes/user')
const PartnershipsRoute=require('./api/routes/partnerships')
const student2Route=require('./api/routes/student2')
const tripRoute=require('./api/routes/trip')
const indiaRoute=require('./api/routes/india')
const hotelsRoute=require('./api/routes/hotels')
const bookhotelsRoute=require('./api/routes/bookhotels')
const packageRoute=require('./api/routes/Package')
const comprehensiveRoute=require('./api/routes/Comprehensive')
const singaporeRoute=require('./api/routes/Singapore')

const port=process.env.PORT || 3000;



mongoose.connect('mongodb+srv://root:admin@cluster2.qzqvwit.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>{
    console.log('connection failed')
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database')
})
// mongodb+srv://root:<password>@cluster2.qzqvwit.mongodb.net/?retryWrites=true&w=majority
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



app.use('/student',studentRoute)
app.use('/student2',student2Route)

app.use('/faculty',facultyRoutes)
app.use('/user', userRoute)
app.use('/partnerships',PartnershipsRoute)
app.use('/trip',tripRoute)
app.use('/india',indiaRoute)
app.use('/hotels',hotelsRoute)
app.use('/bookhotels',bookhotelsRoute)
app.use('/package',packageRoute)
app.use('/comprehensive',comprehensiveRoute)
app.use('/singapore',singaporeRoute)




app.use((req,res,next)=>{
    res.status(404).json({
        error:'bad request'
    })
})

app.listen(port,()=>{
    console.log(`connection is live at  port no ${port}`)
})

module.exports=app