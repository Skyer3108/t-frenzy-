const express=require('express')
const helmet=require('')
const app=express()
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()

const db=require('./db')

const userRoute=require('./Router/userRoute')


const PORT=4000;

app.use(express.json())
 app.use(cors())

 app.use(express.static("./frontend/build"))

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build',"index.html"))
})
app.use('/api/user',userRoute)


app.listen(PORT,()=>{
 console.log(`RUNNING YOUR PORT ON ${PORT}`)
})