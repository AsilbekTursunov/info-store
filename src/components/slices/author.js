import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    isLogin: false,
    user:null
}
export const authorSlice = createSlice({
    name:'author',
    initialState,
    reducers:{
       loginStart: (state) =>{
        state.isLoading = true;
       },
       loginSuccess: (state) =>{},
       loginFailure: (state) =>{}
    }
})

export  const {loginStart}= authorSlice.actions 
export default authorSlice.reducer
 