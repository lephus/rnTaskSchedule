import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    avatar: '',
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userName = action.payload.userName;
      state.avatar = action.payload.avatar;
    },
  },
});

export const {setUserInfo} = userSlice.actions;
export const selectUser = (state: any) => state.user;

export default userSlice.reducer;
