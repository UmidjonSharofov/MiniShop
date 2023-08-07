import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todo: [],
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      const add = { id: uuidv4(), title: payload };
      state.todo = [...state.todo, add];
    },
    deleteItem: (state, { payload }) => {
      state.todo = state.todo.filter((v) => v.id !== payload);
    },
    edit: (state, { payload }) => {
    
       state.todo=state.todo.map(item => {
        if (item.id === payload.id) {
          return { ...item, title: payload.title };
        }
        return item;
      });
    },
  },
});

export const { addItem, deleteItem,edit } = TodoSlice.actions;

export const TodoReducer = TodoSlice.reducer;
