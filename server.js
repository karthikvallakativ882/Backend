//Create HTTP Server
// Import express module
import exp from 'express' ;
//import userApp from user_api.js
import {userApp} from './APIS/user_api.js';
//import productsApp from products_api.js
import {productsApp} from './APIS/products_api.js';

// use the express app (not a Router)
const app = exp();

/**     function middleware1(req,res,next){
        console.log("Middleware1")
        next();
    }

    app.use(middleware1);*/

app.use(exp.json());

app.use('/user-api', userApp);

app.use('/products-api', productsApp);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});