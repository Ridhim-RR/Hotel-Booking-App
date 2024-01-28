import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState{
    user: any,
    accessToken: null

}

const initialState={
    user : null,
    accessToken: null
};

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers:{
        setUser: (state,action: PayloadAction<any>) => {
          state.user = action.payload;
        },
        setIsAuthenticated: (state,action: PayloadAction<any>) => {
            state.accessToken= action.payload;
          },
    }
})

export const  { setUser, setIsAuthenticated} = userSlice.actions;
export default userSlice.reducer;

