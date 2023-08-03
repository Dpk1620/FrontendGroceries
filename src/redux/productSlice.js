import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"
const initialState ={productList: []
,
cartItem:[],
}
export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setProductData:(state,action)=>{
            state.productList = [...action.payload]
        },
        addCartItem: (state, action) => {
            console.log(action)
            state.cartItem = [...state.cartItem,{...action.payload,qty:1,total:action.payload.price}]
          },
        deleteCartItem:(state,action)=>{
             console.log(action)
             const index = state.cartItem.findIndex((el)=> el._id === action.payload)
             state.cartItem.splice(index,1)
             toast("Item Deleted Successfully")
             console.log(index)
        },
        increaseQty:(state,action)=>{
            console.log(action)
       },
       decreaseQty:(state,action)=>{
        console.log(action)
   },
    }
})
export const {setProductData,increaseQty,decreaseQty ,addCartItem,deleteCartItem} = productSlice.actions

export default productSlice.reducer