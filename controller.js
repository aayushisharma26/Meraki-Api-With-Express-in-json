const data =require('../data.json')

exports.get=((req,res)=>{
   res.send(data)
})


exports.post=(function(req,res){
    if ((!req.body.id) || (!req.body.name)){
        res.status(404)
        res.send("it is working")
    }
    const user={
        data:req.body
        
    }
    console.log(user)
    data.push(user)
    res.json("posted sucessfully")
 

})

exports.delete=((req,res)=>{
    const {id}= req.params
    let index=data.findIndex((data)=>{
        return(data.id==Number.parseInt(id))
    })
    console.log(id,req.body,index);
    if (index>=0){
        let std=data[index]
        data.splice(index,1)
        res.json(std)
    }else{
        res.status(404)
    }
})
exports.put=((req,res)=>{
    {
        let id=req.params.id
        //let id=req.body.id
        let name= req.body.name
        let logo= req.body.logo
        let notes= null
        let days_to_complete= req.body.days_to_complete
        let short_description= req.body.short_description
        let type= req.body.type
        course_type= null
        lang_available= [
            "en"
        ]
    }
    let index=data.findIndex((data)=>{
        return(data.id==Number.parseInt(id))
        //return(data.id==(id))
    })
    console.log(id,req.body.index);
    if (index>=0){
        const std=data[index]
        std.id= id
        std.name=name
        std.logo=logo
        std.notes=notes
        std.days_to_complete=days_to_complete
        std.short_description=hort_descripti
        std.type=type
        std.course_type=course_type
        std.lang_available=lang_available
        res.json(std)
    }else{
        res.status(404)
        //res.send()
        //console.log(id);
        //res.json(std)
    }

})