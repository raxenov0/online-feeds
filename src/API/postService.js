import axios from "axios" 

export default class PostService {
    static async getPosts(limit, page = 1){
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                    _limit:limit,
                    _page:page
                }
            })
            console.log(response)
            return response
        
        }
        catch(e){
            console.log("error: ", e)
        }
        
    }
    static async getDataForPost(IdPost){
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${IdPost}`)
            return response
        } catch(e){
            console.log('error '+e)
        }
    }

}