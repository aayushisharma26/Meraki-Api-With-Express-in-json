const express =require('express')
const app = express()
const router=require('../Project1/rout/router')

var bodyParses=require('body-parser')
app.use(bodyParses.json())
const routes=require('../Project1/rout/router')



app.use('/user',routes);

app.listen(4000,(req,res)=>{
    // res.send("LISTERNING TO THE PORT 4000")
    console.log("Listerning to the port....4000")
})
