import {createSlice} from "@reduxjs/toolkit"
const initialState ={productList: []}
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setProductData:(state,action)=>{
            state.productList = [...action.payload]
        },
        addCartItem: (state, action) => {
          },
      
    }
})
export const {setProductData,logoutRedux,addCartItem} = productSlice.actions

export default productSlice.reducer