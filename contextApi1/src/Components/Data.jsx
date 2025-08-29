import React, { useContext } from 'react'
import ApiContext from '../ContextApi/ApiContext'
function Data() {
    const {data} = useContext(ApiContext)
    console.log("data",data.products);
  return (
    <div>
        {
            data.products.map((prd)=>{
                return (<div key={prd.id}>
                    <p>{prd.title}</p>
                </div>)
            })
        }
    </div>
  )
}

export default Data