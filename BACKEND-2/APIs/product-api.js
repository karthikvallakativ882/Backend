import exp from 'express';
import {ProductModel} from '../MODEL/ProductModel.js'
export const productApp = exp.Router();

// get all products
productApp.get('/products',async(req,res)=>{
    let listProsucts = await ProductModel.find();
    res.status(200).json({message:"All Products",payload:listProsucts});
})

// Add product in db
productApp.post('/products',async(req,res)=>{
    let newProduct = req.body;
    let productDoc = ProductModel(newProduct)
    await productDoc.save();
    res.status(200).json({message:"Product Added!"});
})

// Get product by id
productApp.get('/products/:id',async(req,res)=>{
    let objId = req.params.id;
    let product = await ProductModel.findById(objId)
    if(!product){
        return res.status(404).json({message: "Product Not Found!"})
    }
    res.status(200).json({message:"Product Details:",payload:product}) 
})

// Update product by id
productApp.put('/products/:id',async(req,res)=>{
    let objId = req.params.id;
    let obj = req.body;
    let updatedDoc = await ProductModel.findByIdAndUpdate(objId,{$set:{...obj}},{new:true,runValidators:true})
    res.status(200).json({message:"Product Updated !",payload:updatedDoc})
})

//delete product by id
productApp.delete('/products/:id',async(req,res) => {
    let objId = req.params.id;
    let deleteProd = await ProductModel.findByIdAndDelete(objId);
    if(!deleteProd){
        return res.status(404).json({message : "deleted product"})
    }
    res.status(200).json({message : "user deleted", payload : deleteProd})
})