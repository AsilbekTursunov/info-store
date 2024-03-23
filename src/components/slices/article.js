import {
    createSlice
} from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    isLogin: false,
    article: [],
    articleDetail: null,
    error: null
}
export const articleSlice = createSlice({
    name: 'author',
    initialState,
    reducers: {
        getArticleStart: (state) => {
            state.isLoading = true;
        },
        getArticleSuccess: (state, action) => {
            state.isLoading = false;
            state.article = action.payload;
        },
        getArticleFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }, 
        getDetailStart: state => {
            state.isLoading = true;
        },
        getDetailSuccess: (state, action) => {
            state.isLoading = false;
            state.articleDetail = action.payload;
        },
        getDetailFailure: (state) => {
            state.isLoading = false;
        },
        postArticleStart: state =>{
            state.isLoading = true;
        },
        postArticleSuccess: (state) =>{
            state.isLoading = false;
        },
        postArticleFailure: state =>{
            state.isLoading = false;
            state.error = 'Error'
        }
    }
})

export const {
    getArticleStart,
    getArticleSuccess,
    getArticleFailure, 
    getDetailStart,
    getDetailSuccess,
    getDetailFailure,
    postArticleStart,
    postArticleSuccess,
    postArticleFailure
} = articleSlice.actions
export default articleSlice.reducer;