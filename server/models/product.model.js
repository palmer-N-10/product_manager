// 1. IMPORT YOUR DEPENDENCIES
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Provide TITLE"]
    },
    price:{
        type:Number,
        required:[true, "Provide PRICE"],
    },
    description:{
        type:String,
        required:[true, "Description is required"],
        
    }
}, {timestamps:true})

module.exports = mongoose.model("Product", ProductSchema)