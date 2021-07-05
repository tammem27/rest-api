const mongoose = require ('mongoose')
const {Schema} = mongoose

const userSchema = new Schema ({
    name :{
        type : String,
        required:true,
    },
    email:String,
    phone:String,
})


module.exports = mongoose.model('User',userSchema)