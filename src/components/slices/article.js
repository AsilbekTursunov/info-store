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
        getArticleLogin: state => {
            state.isLogin = true;
        },
        getArticleLogout: state => {
            state.isLogin = false;
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
        }
    }
})

export const {
    getArticleStart,
    getArticleSuccess,
    getArticleFailure,
    getArticleLogout,
    getArticleLogin,
    getDetailStart,
    getDetailSuccess,
    getDetailFailure
} = articleSlice.actions
export default articleSlice.reducer;