const mongoose =require('mongoose')

const EmploySchema = mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName :{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    }
})

const EmployeeModel = mongoose.model("EmployModel",EmploySchema)
module.exports = EmployeeModel