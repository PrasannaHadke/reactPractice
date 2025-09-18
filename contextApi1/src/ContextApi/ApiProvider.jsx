import React, { useEffect, useState } from 'react'
import ApiContext from './ApiContext'
function ApiProvider({children}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products')
                const result = await res.json()
                setData(result)
            } catch (error) {
                console.log(error.message);
            }finally{
                setLoading(false)
            }
        }
        getData()
    }, [])
    return (
        <ApiContext.Provider value={{data, setData,loading}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider