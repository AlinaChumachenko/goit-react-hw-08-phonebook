import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterdContacts(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterdContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
