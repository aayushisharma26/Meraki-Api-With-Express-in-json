const express=require('express')
const router=express.Router()
var controller=require('../controller/controller')

router.get('/get',controller.get)

router.post('/post',controller.post) 

router.put('/put/:id',controller.put)

router.delete('/delete/:id',controller.delete)

module.exports=router







