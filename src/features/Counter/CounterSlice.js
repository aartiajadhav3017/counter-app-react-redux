import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialStateValue,
    reducers:{
        increment:(state)=>{
            state.count +=1
        },
        decrement:(state)=>{
            state.count -=1
        },
        increamentByAmount:(state, action) =>{
            state.count += action.payload
        },
    }
})

export const {increment, decrement, increamentByAmount} = counterSlice.actions
export default counterSlice.reducer