import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
    isLoading: false,
    isLogin: false,
    article:[],
    error:null
}
export const articleSlice = createSlice({
    name:'author',
    initialState,
    reducers:{ 
        getArticleStart: (state) =>{
            state.isLoading = true; 
        },
        getArticleSuccess: (state, action) =>{
            state.isLoading = false; 
            state.article = action.payload; 
        },
        getArticleFailure: (state, action) =>{ 
            state.error = action.payload; 
        },
        getArticleLogin: state =>{ 
            state.isLogin = true;  
        },
        getArticleLogout: state =>{ 
            state.isLogin = false;  
        } 
    }
})

export  const { getArticleStart, getArticleSuccess,  getArticleFailure, getArticleLogout, getArticleLogin} = articleSlice.actions 
export default articleSlice.reducer; 