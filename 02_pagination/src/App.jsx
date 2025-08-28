import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [page,setPage]= useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
    const data = await res.json()
    if (data && data.products) {
      setTotalPages(data.total / 10)
      setProducts(data.products)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [page])

  const setPageHandler = (selectedPage)=>{
    if (selectedPage.length >= 1 &&
      selectedPage <=totalPages &&
      selectedPage !== page
    ) {
      
    }
    setPage(selectedPage)
  }
  return (
    <>
      <div>
        {
          products.length > 0 && <div className='products'>
            {
              products.map((prod) => {
                return (
                  <span className='products__single' key={prod.key}> <img src={prod.thumbnail} alt={prod.title} />
                    <span>{prod.title}</span>
                  </span>)

              })
            }
          </div>
        }
        {
  products.length > 0 && <div className='pagination'>
    <span 
      className={page === 1 ? 'pagination_disable' : ''}
      onClick={() => setPageHandler(page - 1)}
    >
      ⬅️
    </span>

    {
      [...Array(Math.ceil(totalPages))].map((_, i) => (
        <span
          key={i}
          className={page === i + 1 ? 'pagination_selected' : ''}
          onClick={() => setPageHandler(i + 1)}
        >
          {i + 1}
        </span>
      ))
    }

    <span
      className={page === Math.ceil(totalPages) ? 'pagination_disable' : ''}
      onClick={() => setPageHandler(page + 1)}
    >
      ➡️
    </span>
  </div>
}

      </div>
    </>
  )
}

export default App