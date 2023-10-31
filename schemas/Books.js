const mongoose=require("mongoose")

const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,

    },
    summary:{
        type:String,
        required:true,
    }
},{timestamps:true});

Books=mongoose.model("books",BookSchema)
module.exports={Books}