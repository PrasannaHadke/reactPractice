import React, { useContext } from 'react'
import ApiContext from '../contextApi/ApiContext'
import ApiProvider from '../contextApi/ApiProvider'

function Post() {
    const {data , loading , error} = useContext(ApiContext)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    console.log(data.products);
  return (
    <div>
       {
        data.products.map((prd)=>{
          return  (
            <div>
          <img src={prd.images[0]} alt="" />
          <p>{prd.title}</p>
          </div>)
        })
       }
    </div>
  )
}

export default Post