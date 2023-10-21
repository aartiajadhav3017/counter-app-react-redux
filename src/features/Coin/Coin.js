import React from 'react'
import { useSelector } from 'react-redux'

export const Coin = () => {
    const count = useSelector((state) =>state.counter.count)
  return (
    <div>
        Count: {count}
    </div>
  )
}
