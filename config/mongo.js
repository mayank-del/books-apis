const mongoose=require("mongoose");

module.exports=()=>{
    
    try{
        mongoose.set("strictQuery", false);
        mongoose.connect("mongodb+srv://ydwd1911:ydwd1911@cluster0.cn00szc.mongodb.net/?retryWrites=true&w=majority")
        console.log("Database connected!")
    }catch(e){
        console.log("Could not connect to database"+e);
    }
}