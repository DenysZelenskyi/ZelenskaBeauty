import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const {setUser, updateUser, logout} = userSlice.actions;
export default userSlice.reducer;
