import axios from 'axios'




const api = {

    getAuth: (request) => axios.get(
         request.url,
        {
            headers: { "Authorization": request.token, "accept": "application/json"}
        }
    ),
    postAuth: (request) => axios.post(
        request.url,
        request.data,
        {
            headers: { "Authorization": request.token, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', "Accept":"*/*","Accept-Encoding":"gzip, deflate, br"}
        }

    ),

}

export default api