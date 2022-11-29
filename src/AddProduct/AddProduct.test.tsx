import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { AddProduct } from './'

describe('AddProduct', () => {
  it('add product', () => {
    // Given: 추가할 상품 이름, 가격
    const name = 'cherry'
    const price = 10000

    const addProduct = jest.fn() // jest에서 제공하는 mock함수 (함수가 호출 됐는지, 호출됐다면 어떤 파라미터로 호출됐는지 확인)
    render(<AddProduct addProduct={addProduct} />)
    const nameInput = screen.getByPlaceholderText('name')
    const priceInput = screen.getByPlaceholderText('price')
    const button = screen.getByRole('button', { name: 'add' })

    // When: 이름과 가격 입력 후 상품 추가 버튼 클릭
    fireEvent.change(nameInput, {
      target: {
        value: name,
      },
    })

    fireEvent.change(priceInput, {
      target: {
        value: price,
      },
    })

    fireEvent.click(button)

    // Then: addProduct에 args 파라미터가 호출됐어야함, input 비워짐
    expect(addProduct).toBeCalledWith({ name, price })
    expect(nameInput).toHaveAttribute('value', '')
    expect(priceInput).toHaveAttribute('value', '')
  })

  it('button disabled', () => {
    // Given: input 빈값
    const addProduct = jest.fn() // jest에서 제공하는 mock함수 (함수가 호출 됐는지, 호출됐다면 어떤 파라미터로 호출됐는지 확인)
    render(<AddProduct addProduct={addProduct} />)
    const nameInput = screen.getByPlaceholderText('name')
    const priceInput = screen.getByPlaceholderText('price')
    const button = screen.getByRole('button', { name: 'add' })

    // When: 버튼 클릭
    fireEvent.change(nameInput, {
      target: {
        value: '',
      },
    })

    fireEvent.change(priceInput, {
      target: {
        value: '',
      },
    })

    fireEvent.click(button)

    // Then: 버튼 disable 상태
    expect(button).toHaveAttribute('disabled')
    expect(addProduct).not.toBeCalled()
  })
})
