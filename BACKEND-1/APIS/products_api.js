import exp from 'express'
export const productsApp = exp.Router()

//creating empty product array
let products = []

//Get all the products        
productsApp.get("/products",(req, res)=>{
    res.status(200).json({
        message:"Products:",
        payload:products
    })
})

//Adding new products        
productsApp.post("/products",(req, res)=>{
    let product = req.body;

    // Auto generate productId if not provided
    if(!product.productId){
        product.productId = products.length + 1
    }

    products.push(product);

    res.status(201).json({
        message: "Product Created !",
        payload: product
    })
})
   
//Getting products by id
productsApp.get("/products/:id", (req, res) => {
    let productId = Number(req.params.id)

    let product = products.find(p => p.productId === productId)

    if (product) {
        res.status(200).json({
            message: "Product found",
            payload: product
        })
    } else {
        res.status(404).json({
            message: "Product not found"
        })
    }
})


// Updating product by id
productsApp.put('/products/:id', (req, res) => {
    const productId = Number(req.params.id)
    const modifiedProduct = req.body

    const index = products.findIndex(
        product => product.productId === productId
    )

    if (index !== -1) {

        // Copy old properties + update new ones
        products[index] = {
            ...products[index],
            ...modifiedProduct
        }

        res.status(200).json({
            message: "Product updated successfully",
            payload: products[index]
        })
    } else {
        res.status(404).json({
            message: "Product not found"
        })
    }
})


//Deleting products
productsApp.delete('/products/:id', (req, res) => {
    const productId = Number(req.params.id)

    const index = products.findIndex(p => p.productId === productId)

    if (index !== -1) {

        let deletedProduct = products.splice(index, 1)

        res.status(200).json({
            message: "Product deleted successfully",
            payload: deletedProduct
        })
    } else {
        res.status(404).json({
            message: "Product not found"
        })
    }
})