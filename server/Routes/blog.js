
const Blog = require("../Models/blog")
const router = require("express").Router();


router.post("/api/create",async(req,res)=>{
    const newBlog = new Blog(req.body);
    try{
        const result = await newBlog.save();
        res.send(result);
    }catch(err){
        res.send("error while creating new blog "+ err )
    }

})

router.get("/api/blog",async(req,res)=>{
   
    try{
        const result = await Blog.find({})
        res.send(result);
    }catch(err){
        res.send("error while fetching all blogs "+ err )
    }

})

// get by id 

router.get("/api/blog/:id",async(req,res)=>{
    const _id = req.params.id;
   
    try{
        const result = await Blog.findOne({_id:_id})
        res.send(result);
    }catch(err){
        res.send("error while fetching all blogs "+ err )
    }

})



module.exports = router;