import {products} from "../../../../data/products"
import {IProduct} from "../../../../data/product"
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    console.log(searchParams.get("category"))
    const data:IProduct[]= products
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
    },
  });

  
}

