import React from 'react'

import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

const Home = () => {
  const url = `https://60aeb6705b8c300017deb218.mockapi.io/api/v1/products?page=1&limit=10`

  let products = useAxiosGet(url)
  let content = null

  if (products.error) content = <p>There was an error loading the data.</p>

  if (products.loading) content = <Loader />

  if (products.data)
    content = products.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ))

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Bestsellers</h1>
      {content}
    </div>
  )
}

export default Home
