import React from 'react'
import { render, screen } from '@testing-library/react'
import { Product } from '../types'
import { ProductList } from './'

describe('ProductsList', () => {
  const products: Product[] = [
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

  it('should matches snapshot', () => {
    const view = render(<ProductList products={products} />)

    expect(view).toMatchSnapshot()
  })

  it('render products', () => {
    // Given: 상품 데이터
    // When: 렌더시
    render(<ProductList products={products} />)

    // Then: 상품리스트 렌더링
    screen.getAllByText(products[0].name)
    screen.getAllByText(products[1].name)
    screen.getAllByText(products[2].name)
  })
})
