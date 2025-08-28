import React from 'react'

function Props({product}) {
    console.log("product",product);
  return (
    <div>Props
         <div>
            {
                product.map((prd)=>{
                    return <div key={prd.id}>
                        <img src={prd.thumbnail} alt="" />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Props