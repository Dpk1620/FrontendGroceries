import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"
import "../App.css"
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
            const justifyItem = state.cartItem.some((el) => el._id === action.payload._id);
            if (justifyItem) {
                toast.error("Already added in card",{
                    style: {
                      border: '1px solid red',
                      padding: '16px',
                      color: 'red',
                    },
                  })
            } else {
              toast.success("Item added in card",{
                style: {
                  border: '1px solid green',
                  padding: '16px',
                  color: 'green',
                },
                iconTheme: {
                  primary: 'green',
                  secondary: '#FFFAEE',
                },
              })
              const total = action.payload.price;
              state.cartItem = [
                ...state.cartItem,
                { ...action.payload, qty: 1, total: total },
              ];
            }
          },
        deleteCartItem:(state,action)=>{
             console.log(action)
             const index = state.cartItem.findIndex((el)=> el._id === action.payload)
             state.cartItem.splice(index,1)
             toast.error("Item Deleted Successfully",{
                style: {
                  border: '1px solid red',
                  padding: '16px',
                  color: 'red',
                },
              })
        },
        increaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            const qtyInc = ++qty;
            state.cartItem[index].qty = qtyInc;
            const price = state.cartItem[index].price;
            const total = price * qtyInc;
            state.cartItem[index].total = total;
            toast.success("Added successfully",{
                style: {
                  border: '1px solid green',
                  padding: '16px',
                  color: 'green',
                },
              })
          },
          decreaseQty: (state, action) => {
            const index = state.cartItem.findIndex((el) => el._id === action.payload);
            let qty = state.cartItem[index].qty;
            if (qty > 1) {
              const qtyDec = --qty;
              state.cartItem[index].qty = qtyDec;
              const price = state.cartItem[index].price;
              const total = price * qtyDec;
              state.cartItem[index].total = total;
              toast.error("Remove successfully",{
                style: {
                  border: '1px solid red',
                  padding: '16px',
                  color: 'red',
                },
              })
            }
            else {
                const index = state.cartItem.findIndex((el)=> el._id === action.payload)
                state.cartItem.splice(index,1)
                toast.error("Remove Item From Cart",{
                    style: {
                      border: '1px solid red',
                      padding: '16px',
                      color: 'red',
                    },
                  })
            }
          },
    }
})
export const {setProductData,increaseQty,decreaseQty ,addCartItem,deleteCartItem} = productSlice.actions

export default productSlice.reducer