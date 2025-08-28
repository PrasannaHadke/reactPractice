import { useEffect, useState } from "react";
import Props from "./Props";
function Api(){
    const [product,setProduct]=useState([])
    console.log(product);
    useEffect(()=>{
        let onlineProduct = async ()=>{
            try{
                const response = await fetch('https://dummyjson.com/products')
                const data = await response.json()
                setProduct(data.products)

            }catch(error){
                console.log(error);
            }
        }
        onlineProduct()
    },[])
    return(
        <>
        <div>
            {
                product.map((prd)=>{
                    return <div key={prd.id}>
                        <img src={prd.thumbnail} alt="" />
                    </div>
                })
            }
        </div>
        <Props product = {product}/>
        </>
    )
}

export default Api;