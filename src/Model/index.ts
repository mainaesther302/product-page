import { Request } from "express";

export interface Product
{
    id: number,
    name: string,
    price: string,
    description: string,
    image: string,
    added:boolean

}

export interface addProduct
{
    name: string,
    price: string,
    description: string,
    image: string
    added: boolean
}
export interface TypedBody extends Request 
{
    body: addProduct;

}