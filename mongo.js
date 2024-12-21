const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/expense_tracker")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed")
})

const newSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection=mongoose.model("collection",newSchema)








const ex_Schema=new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    account:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const ex_collection=mongoose.model("ex_collection",ex_Schema)







const in_Schema=new mongoose.Schema({
    in_date:{
        type:Date,
        required:true
    },
    in_income:{
        type:Number,
        required:true
    },
    in_category:{
        type:String,
        required:true
    },
    in_description:{
        type:String,
        required:true
    }
})
const in_collection=mongoose.model("in_collection",in_Schema)







module.exports = { collection, ex_collection, in_collection };


