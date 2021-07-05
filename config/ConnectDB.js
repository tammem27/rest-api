const mongoose = require ("mongoose");


module.exports=ConnectDB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.bb, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify: false,
        })
        console.log('database is connected successfully')
    } catch (error) {
        console.log(error)
        
    }
}