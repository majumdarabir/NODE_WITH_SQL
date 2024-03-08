const express = require("express")
const router = express.Router()
const {Post} = require('../models')
router.get("/",async(req,res)=>{
    const data = await Post.findAll()
    res.send(data)
})

router.post("/post",async(req,res)=>{
    const data = req.body
    await Post.create(data)
    res.json("....")

})
module.exports = router