const {Books}=require("../schemas/Books")

const routes=require("express").Router()


 routes.post("/add/book",async(req,res)=>{
    
    try {
        const {title,author,summary}=req.body
        const data= await new Books({
            title:title,
            author:author,
            summary:summary,

        }).save()
        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).send(error)
    }
 })

routes.get("/get/all/books",async(req,res)=>{
    try {
        const books=await Books.find({})
        if(books.length===0){
            return res.status(200).send("No data is present, first insert some data ,then fetch results.")
        }
        return res.status(200).send(books)
    } catch (error) {
        return res.status(500).send(error)
    }
})

routes.get("/get/book/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const book=await Books.findOne({_id:id})
        
        if(!book){
            return res.status(404).send("No record is present with this id")
        }
        return res.status(200).send(book)
    } catch (error) {
        return res.status(500).send(error)
    }
})

routes.patch("/update/book/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const updateReq=req.body
        const found=await Books.findOne({_id:id})
        if(!found){
            return res.status(404).send("No record is present with this id")
        }
        await Books.findOneAndUpdate({_id:id},updateReq).then(result=>{
            //return res.status(200).send(result)
            return res.status(200).send(`updated data of id:${id}`)
        })

        
    } catch (error) {
        return res.status(500).send(error)
    }
})

routes.delete("/delete/book/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const found=await Books.findOne({_id:id})
        //console.log(found);
        if(!found){
            return res.status(404).send("No record is present with this id")
        }
        const book=await Books.findOneAndDelete({_id:id})

        return res.status(200).send(book)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports=routes