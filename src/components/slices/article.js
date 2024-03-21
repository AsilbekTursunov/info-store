import { createSlice } from "@reduxjs/toolkit"; 


const initialState = {
    isLoading: false,
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
        getArticleLogout: state =>{ 
            state.isLoading = false;  
        } 
    }
})

export  const { getArticleStart, getArticleSuccess,  getArticleFailure, getArticleLogout} = articleSlice.actions 
export default articleSlice.reducer; 