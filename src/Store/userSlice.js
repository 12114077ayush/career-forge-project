import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userdata: {
    name: "",
    email: "",
    skills: "",
    schooling: "",
    address: "",
    phone: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state, action) => {
      state.userdata.name = action.payload.name;
      state.userdata.email = action.payload.email;
      state.userdata.skills = action.payload.skills;
      state.userdata.schooling = action.payload.schooling;
      state.userdata.phone = action.payload.phone;
    },
  },
});

export const { setuser } = userSlice.actions;
export default userSlice.reducer;
