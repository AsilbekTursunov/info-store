import axios from './api'
const GetArticles = {
    async getArticles () {
        const {data} = await axios.get('/articles')
        return data
    },
    async getDetails (slug) {
        const {data} = await axios.get(`/articles/${slug}`)
        return data
    },
    async postArticle (article) {
        const {data} = await axios.get(`/articles`, {article})
        return data
    }
}
export default GetArticles;