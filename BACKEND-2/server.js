import exp from 'express';
import {userApp} from './APIs/user-api.js';
import {productApp} from './APIs/product-api.js'
import { connect } from 'mongoose';
const app = exp();
const port = 4000;

async function connectDB(){
    try{
        await connect('mongodb://localhost:27017/KumarDB')
        console.log("DataBase Connected Successfully !")
        app.listen(port,()=>console.log("http server running on port 4000"));
    }
    catch(error){
        console.log("DataBase not connected because ",error);
    }
}

connectDB();
app.use(exp.json())

app.use('/user-api',userApp)
app.use('/product-api',productApp);