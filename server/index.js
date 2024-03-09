const express = require("express")
const db = require("./models")
const Post = require('./Routers/Post')
const Quiz = require('./Routers/QuestionRoute')
const app = express()

app.use(express.json())
app.use('/auth',Post)
app.use('/',Quiz)
db.sequelize.sync().then(()=>{
    app.listen(3080, () => {
        console.log("server started ..")
    })
})
