import React, { useEffect,useState } from 'react'
import Property from './Property'

function FetchApiProps() {
    const [prd,setprd] = useState([])
    useEffect(()=>{
        try {
            const product = async ()=>{
                let response = await fetch('https://dummyjson.com/products')
                let data = await response.json()
                // console.log(data);
                setprd(data.products)
            }
        product()

        } catch (error) {
            console.log(error);
        }
    },[])
    console.log("prd",prd);
  return (
    <div>FetchApiProps
        <Property product = {prd}/>
    </div>
  )
}

export default FetchApiProps