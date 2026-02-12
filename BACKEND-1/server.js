// Import express module
import exp from 'express' ;
//import userApp from user_api.js
import {userApp} from './APIS/user_api.js';
//import productsApp from products_api.js
import {productsApp} from './APIS/products_api.js';

// use the express app (not a Router)
const app = exp();

//Body parser Middleware for req.body
app.use(exp.json());
//Create Application Server
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});

//for req to APIs
app.use('/user-api', userApp);

app.use('/products-api', productsApp);
