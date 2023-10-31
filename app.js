const express =require("express");
const books=require("./routes/Books")
require("./config/mongo")()

const app=express()
app.use(express.json())

app.use("/api/v1",books)

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log("server is listening to port:",port);
})