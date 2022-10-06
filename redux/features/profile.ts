import { User } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { profile: User } = {
  profile: {} as User,
};
export const productsSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<User>) => {
      state.profile = action.payload;
    },
  },
});
export const { setProfile } = productsSlice.actions;
export default productsSlice.reducer;
