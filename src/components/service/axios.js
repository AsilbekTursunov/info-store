import axios from './api'

const AuthorInfo = {
    async userRegister(user){
        const response = await axios.post('/users',{user}) 
        return response
    },
    async userLogin(user){
        const response = await axios.post('/users/login',{user}) 
        return response;
    },
    async getUser(){
        const {data} = await axios.get('/user')
        return data
    }
}
export default AuthorInfo;