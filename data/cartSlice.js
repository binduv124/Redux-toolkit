import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartProductIds:[]
    },
    reducers:{
        addToCart:(state,action) => {
            console.log(action.payload);
            state.cartProductIds = [action.payload, ...state.cartProductIds]
        },
        removeFromCart:(state,action)=>{
            console.log(action.payload);
            const indexId = state.cartProductIds.indexOf(action.payload);
            state.cartProductIds.splice(indexId,1); 
        },
        clearAllItems:(state) => {
            state.cartProductIds = []
        }
    }
})

export default cartSlice;