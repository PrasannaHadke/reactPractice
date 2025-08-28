import React, { useEffect, useState } from 'react'
import ApiContext from './ApiContext'
function ApiProvider({children}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)
    
    useEffect(()=> {
        const fetchdata = async()=>{

            try {
                setLoading(true)
                const res = await fetch(`https://dummyjson.com/products`)
                const data = await res.json()
                setData(data)
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchdata()
    },[])
  return (
    <ApiContext.Provider value={{data,loading,error}}>
        {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider