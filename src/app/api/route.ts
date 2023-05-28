import {products} from "../../../data/products"
import {IProduct} from "../../../data/product"
import { NextResponse } from "next/server";


export async function GET(req:any, ) {
    const data:IProduct[]= products
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });

  
}

