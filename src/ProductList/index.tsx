import React from 'react'
import { Product } from '../types'

interface Props {
  products: Product[]
}

export const ProductList = ({ products }: Props) => {
  if (!products) return <></>

  return (
    <ul>
      {products.map(({ id, name, price }) => (
        <li key={id}>
          <span>{name}</span> | <span>{Intl.NumberFormat().format(price)}</span>
        </li>
      ))}
    </ul>
  )
}
