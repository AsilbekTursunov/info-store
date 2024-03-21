import axios from './api'
const GetArticles = {
    async getArticles () {
        const {data} = await axios.get('/articles')
        return data
    }
}
export default GetArticles;