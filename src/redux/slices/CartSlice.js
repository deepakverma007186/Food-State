import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.cart[itemIndex].qty += 1;
      } else {
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    removeAllFromCart: (state) => {
      state.cart = [];
    },
    incrementQty: (state,action)=>{
        const {id} = action.payload;
        const item = state.cart.find((item)=>item.id === id)
        if(item){
            item.qty += 1;
        }
    },
    decrementQty: (state, action) => {
        const { id } = action.payload;
        const item = state.cart.find((item) => item.id === id);
      
        if (item && item.qty > 0) {
          item.qty -= 1;
        }
      },
      
  },
});

export const { addToCart, removeFromCart, removeAllFromCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;
