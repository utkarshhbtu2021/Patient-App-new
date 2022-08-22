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
            headers: { "Authorization": "Basic MG9hZHkxdWV3ZzFDMjZQMVgyOTc6QXpXMUJfRTNQdWlqSGpocU10dGU1Rm1WOHlnZ3djMjA5cURxS3hqOQ==", "accept": "application/json"}
        }

    ),

}

export default api