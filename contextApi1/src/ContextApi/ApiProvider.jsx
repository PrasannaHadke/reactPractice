import React, { useState } from 'react'
import ApiContext from './ApiContext'
function ApiProvider({children}) {
    const [data, setData] = useState([])

    useState(() => {
        const getData = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products')
                const result = await res.json()
                setData(result)
            } catch (error) {
                console.log(error.message);
            }
        }
        getData()
    }, [setData])
    return (
        <ApiContext.Provider value={{data, setData}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider