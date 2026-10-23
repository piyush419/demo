import express from "express"
const app = express()

const PORT = 3000

app.get("/", async(req, res, next)=>{
     return res.send("Hello from server")
})

app.listen(PORT , ()=>{
     console.log("Server is running at PORT", PORT)
})