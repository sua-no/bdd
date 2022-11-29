import React, { useCallback, useMemo, useState } from 'react'
import { Product } from '../types'

interface Props {
  addProduct: ({ name, price }: Omit<Product, 'id'>) => void
}

export const AddProduct = ({ addProduct }: Props) => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const disabled = useMemo(() => !Boolean(name) || !Boolean(price), [name, price])

  const onSubmit = useCallback(() => {
    if (disabled) return
    addProduct({ name, price: +price })
    setName('')
    setPrice('')
  }, [name, price])

  const onKeyDown = useCallback(
    (e: any) => {
      if (e.key === 'Enter') {
        onSubmit()
      }
    },
    [name, price],
  )

  return (
    <form>
      <input type="text" value={name} placeholder="name" onChange={({ target: { value } }) => setName(value)} />
      &nbsp;
      <input type="number" value={price} placeholder="price" onChange={({ target: { value } }) => setPrice(value)} onKeyDown={onKeyDown} />
      &nbsp;
      <button type="button" name="add" disabled={disabled} onClick={onSubmit}>
        add
      </button>
    </form>
  )
}
