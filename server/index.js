const express = require("express")
const db = require("./models")
const Post = require('./Routers/Post')
const app = express()

app.use(express.json())
app.use('/api',Post)
db.sequelize.sync().then(()=>{
    app.listen(3080, () => {
        console.log("server started ..")
    })
})
