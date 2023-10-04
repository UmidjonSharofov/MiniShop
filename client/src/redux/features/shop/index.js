import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shop: [],
};

export const ShopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const itemInCart=state.shop.find((item)=>item?._id ===payload._id);
      if (itemInCart){
          itemInCart.quantity++
      }else {
          state.shop.push({...payload,quantity:1})
      }
    },
    increment: (state, { payload }) => {
      const itme = state.shop.find((v) => v._id === payload._id);
   
        itme.quantity++;
   
    },
    decrement: (state, { payload }) => {
      const itme = state.shop.find((v) => v._id === payload._id);
      if (itme.quantity == 1) {
        const itme = state.shop.filter((v) => v._id !== payload._id);
        state.shop = itme;
      } else itme.quantity--;
    },
    deleteItme: (state, { payload }) => {
      const itme = state.shop.filter((v) => v._id !== payload._id);
      state.shop = itme;
    },
    removeAllItem:(state)=>{
      state.shop=[]
  }
  },
});

export const { addItem, increment, decrement, deleteItme,removeAllItem} = ShopSlice.actions;

export const ShopReducer = ShopSlice.reducer;
