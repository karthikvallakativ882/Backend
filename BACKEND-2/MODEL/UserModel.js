import { Schema,model } from "mongoose";
//create user schema
const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length should be 4"],
        maxLength:[6,"Max length is 6"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Age should be above 18"],
        max:[25,"Age should be less than equal to 25"]
    }
},
{statics:"throw",
    timestamps:true
});

export const UserModel = model("user",userSchema)