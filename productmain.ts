import express,{json}  from 'express';
import router from './src/Routes';
const app = express();
app.use(json())
app.use("/products",router)
app.listen(5500,() =>{
    console.log("Product App Running");
})