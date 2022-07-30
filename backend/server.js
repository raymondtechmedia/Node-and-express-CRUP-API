const express = require('express')
const mongoose = require ('mongoose')
const EmployeesModel = require('./Model/Employees')
const cors = require('cors')
const app = express()
const port = 5000

//middleware
app.use(express.json())
app.use(cors())

app.listen(port, ()=>{
    console.log(`server up and running...`);
})

mongoose.connect("mongodb+srv://Raymondk:chlLTfWv1iqAQg76@cluster0.fz2pj.mongodb.net/mydb1?retryWrites=true&w=majority")
.then(()=>{
    console.log(`connected to the database`);

})
.then((error)=>{
    console.log(error);
})
//routes

app.get('/read', async(req,res)=>{
    const findeData = await EmployeesModel.find()
    
    res.send(findeData)     
})
app.post('/post', async(req,res)=>{  
     const addData = new EmployeesModel(req.body) 
     await addData.save()                
    res.send(`data posted`)
})

app.delete("/delete/:id",async(req,res)=>{  
     await EmployeesModel.findByIdAndDelete(req.params.id)                            
        res.send(`employee deleted`)
    })

app.patch("/update/:id",async(req,res)=>{
         await EmployeesModel.findByIdAndUpdate( req.params.id,req.body)
        res.send(`employee updated`)
    })
