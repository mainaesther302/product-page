import{Request, Response} from 'express'
import{Product, TypedBody} from '../Model'
const products:Product[]=[]

export function getProducts(req:Request,res:Response){
    res.status(200).json(products)

}

export const addProduct=(req:Request,res:Response)=>{
    const {name,price,description,image, added}  =req.body
    let newProduct:Product=
    {
        id:Math.floor(Math.random() * 10000) ,
        name,
        price,
        description,
        image,
        added:false 
     }
     products.push(newProduct)
     res.status(201).json({message:"Product added successfully"}) 

}
export function getProduct(req:Request<{id:string}>, res:Response){
    const id= +req.params.id
    const product=products.find(p=>p.id===id)

    if (product!=undefined) {
        return res.status(200).json(product)
    }
    return res.status(404).json({message:"Product not found"})
}
export function updateProduct(req:Request<{id:string}>, res:Response){
    const id= +req.params.id
    const product=products.find(p=>p.id===id)
    const {name,price,description,image, added}  =req.body
    if (product!=undefined) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.added = added
        return res.status(200).json({message:`${description} updated`})
    }
    return res.status(404).json({message:"Product not found"})

}
export const deleteProduct =(req:Request, res:Response) => {
    const id= +req.params.id
    const index =products.findIndex(p=>p.id===id)
    if (index>=0) {
        products.splice(index,1)
        return res.status(200).json({message: `Product ${id}deleted successfully`})
    }
    return res.status(404).json({message:"Product not found"})
}