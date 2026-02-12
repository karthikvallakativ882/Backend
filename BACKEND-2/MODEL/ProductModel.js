import { Schema,model } from "mongoose";
export const productSchema = new Schema({
    productname:{
        type:String,
        required : [true,"product name required"],
        minLength:[5,"min length is 5"],
        maxLength:[20,"max length is 20"]
    },
    price:{
        type:Number,
        required:[true,"price required"]
    }
},{
    strict:"throw",
    timestamps: true
})

export const ProductModel = model("product",productSchema);