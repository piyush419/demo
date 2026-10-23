import express from "express"
const app = express()

const PORT = 3000

app.get("/", async(req, res, next)=>{
     return res.send("Hello from server")
})
app.get("/product", async(req, res, next)=>{
     return res.send("Hello from product")
})

app.listen(PORT , ()=>{
     console.log("Server is running at PORT", PORT)
})