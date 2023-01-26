import {createSlice} from '@reduxjs/toolkit';

export const selectUser = createSlice({
  name: 'selectUser',
  initialState: {
    value: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserData} = selectUser.actions;

export default selectUser.reducer;
