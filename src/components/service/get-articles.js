import axios from './api'
const GetArticles = {
    async getArticles () {
        const {data} = await axios.get('/articles')
        console.log(data);
        return data
    },
    async getDetails (slug) {
        const {data} = await axios.get(`/articles/${slug}`)
        return data
    },
    async postArticle (article) {
        const {data} = await axios.post(`/articles`, {article})
        return data
    },
    async deleteArticle (slug) {
        const {data} = await axios.delete(`/articles/${slug}`)
        return data
    },
    async putArticle (slug, article) {
        const {data} = await axios.put(`/articles/${slug}`, {article})
        return data
    }
}
export default GetArticles;