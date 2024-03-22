import axios from './api'
const GetArticles = {
    async getArticles () {
        const {data} = await axios.get('/articles')
        return data
    },
    async getDetails (slug) {
        const {data} = await axios.get(`/articles/${slug}`)
        return data
    }
}
export default GetArticles;