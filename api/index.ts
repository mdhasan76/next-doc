import {products} from "../data/products"
import {IProduct} from "../data/product"

export default async function handler(req:any, res:any) {
    const data:IProduct[]= products
  try {
    const result = data ;
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}