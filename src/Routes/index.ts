import { Router  } from "express";
import {updateProduct, addProduct, getProduct, getProducts, deleteProduct,} from "../Controllers"

const router = Router();
router.get('' , getProduct)
router.get('/:id' , getProduct)
router.post('' , getProducts)
router.put('/:id' , updateProduct)
router.delete('/:id' , deleteProduct)

export default router;

