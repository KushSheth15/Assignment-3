const mongoose = require("mongoose");
require("../config/db");
const prodschema = mongoose.Schema({
    product_name:String,
    product_price:String,
    product_category:String,
    manufacturer:String,
})
const Product = mongoose.model("Product",prodschema)
module.exports=Product;