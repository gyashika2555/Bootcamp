// const math=require("./math");
// console.log(math, "math");

// console.log(math.add(5,3));
// console.log(math.subtract(5,3));

// console.log("Backend logic")
// console.log("yashika")

const express= require("express")
console.log(express)

const app = express()
console.log(app);

app.get("/", (req,res)=>{
 res.send("this is home page")

})
app.get("/about", (req,res)=>{
 res.send("this is about page")
})
app.get("/contact", (req,res)=>{
 res.send("this is contact page")
})

app.get("/address", (req,res)=>{
 res.send(
    `<html>
        <head></head>
        <body>
            <h1></h1>
            <button>click</button>
        </body>
    </html>`
 )
})



app.listen(3100 ,()=>{
    console.log("server is running in 3100")
})