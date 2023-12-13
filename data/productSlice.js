import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsList from './productList.json'

export const fetchAllProducts = createAsyncThunk('fetch-all-products', async (apiUrl)=>{
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    return response.json();
})

export const productSlice = createSlice({
    name:'products',
    initialState:{ data:[], fetchStatus:''},
    reducers:{},
    extraReducers:(builder) => { 
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            console.log(action);
            state.data = action.payload
            state.fetchStatus = 'success'
        })
        .addCase(fetchAllProducts.pending,(state)=>{
            state.fetchStatus = 'loading'
        })
        .addCase(fetchAllProducts.rejected,(state)=>{
            state.data = productsList.products
            state.fetchStatus='error'
        })
    }
})