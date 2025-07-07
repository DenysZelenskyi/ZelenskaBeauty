import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({...action.payload, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
    clearCart: () => [],
  },
});

export const {addItem, removeItem, updateQuantity, clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
