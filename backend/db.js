const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('MONGODB CONNECTED')
}).catch((err)=>[
    consoe.log('ERROR',err)
])