import React, { useCallback, useRef, useState } from 'react'
import './App.css'
import { Product } from './types'
import { ProductList } from './ProductList'
import { AddProduct } from './AddProduct'

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'apple',
    price: 2000,
  },
  {
    id: 2,
    name: 'banana',
    price: 1000,
  },
  {
    id: 3,
    name: 'kiwi',
    price: 3000,
  },
]

function App() {
  const [products, setProducts] = useState(initialProducts)

  const nextId = useRef(4)

  const addProduct = ({ name, price }: Omit<Product, 'id'>) => {
    setProducts([...products, { id: nextId.current, name, price }])
    nextId.current += 1
  }

  return (
    <div className="App">
      <h1>Products List</h1>
      <ProductList products={products} />
      <AddProduct addProduct={addProduct} />
    </div>
  )
}

export default App
