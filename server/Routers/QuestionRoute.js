const express = require("express")

const router = express.Router()

const {Quiz} = require("../models")

router.get('/get_questions',async(req,res)=>{
    const data = await Quiz.findAll()
    res.send(data)
})

router.post('/post_questions',async(req,res)=>{
    const data = req.body
    await Quiz.create(data)
    res.json("fdnlsnfd")
})

module.exports = router