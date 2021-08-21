const express = require("express")
const {router} = require("./routes/index")
const sequelize = require("./db")
const cors = require("cors")

const app = express()

app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))

app.use(express.json())
app.use('/api',router)

async function start(){
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(5001,()=>{
        console.log("Server was started!")
    })
}

start()