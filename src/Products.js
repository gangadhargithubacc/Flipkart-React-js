import React from "react";
import axios from 'axios';
import { useEffect,useState } from "react";
export default function Products()
{  const [products,setProducts]=useState([{}]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(res=>setProducts(res.data.products))
    },0)
   console.log(products)
   return(
    <>
   
     <div className='col-md-8'>
    { 
        products.map((e,i)=>{
            return(
            <h1>{e.title}</h1>
            )
        })
        
    }
    </div>
    
    </>
   )

}