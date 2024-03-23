import { createSlice } from "@reduxjs/toolkit";
import { SetItem } from "../get-user/preset-storage";


const initialState = {
    isLoading: false,
    isLogin: false,
    error:null,
    user:null
}
export const authorSlice = createSlice({
    name:'author',
    initialState,
    reducers:{ 
        userEnterStart: (state) =>{
            state.isLoading = true;
            state.isLogin = false;
        },
        userEnterSuccess: (state, action) =>{
            state.isLoading = false;
            state.isLogin = true;   
            state.user = action.payload; 
            SetItem('token', action.payload.user.token) 
        },
        userEnterFailure: (state, action) =>{
            console.log(action);
            state.error = action.payload; 
        },
        userLogout: state =>{
            state.user = null;
            state.isLogin = false;  
            localStorage.removeItem("token");
        }
    }
})

export  const { userEnterStart, userEnterSuccess,  userEnterFailure,userLogout } = authorSlice.actions 
export default authorSlice.reducer
 