import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  like: [],
};

export const LikeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToLike: (state, { payload }) => {
      const itemInCart = state.like.find((item) => item?._id === payload._id);
      if (itemInCart) {
        itemInCart.isLike = true;
      } else {
        state.like.push({ ...payload, isLike: true });
      }
    },
    removeItem: (state, { payload }) => {
        const removeItem = state.like.filter((item) => item._id !== payload._id);
      state.like = removeItem;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToLike, removeItem } = LikeSlice.actions;

export const LikeReducer = LikeSlice.reducer;
