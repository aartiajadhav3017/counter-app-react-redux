import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, increamentByAmount } from './CounterSlice'

export const Counter = () => {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <button className='btn' onClick={() => { dispatch(increment()) }}>+</button>
          <span>Count:  {count}</span> 
            <button onClick={() => {dispatch(decrement())  }}>-</button>

            <button onClick={() => {dispatch(increamentByAmount(10))  }}>increamentByAmount</button>

        </div>
    )
}
