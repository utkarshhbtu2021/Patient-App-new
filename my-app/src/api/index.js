import axios from 'axios'

function getToken() {
    return new Promise((resolve, reject) => {
        axios.request({
            url: "/oauth2/v1/token",
            method: "post",
            baseURL: "https://api.preview.platform.athenahealth.com/",
            auth: {
                username: "0oady1uewg1C26P1X297",
                password: "AzW1B_E3PuijHjhqMtte5FmV8yggwc209qDqKxj9"
            },
            data: "grant_type=client_credentials&scope=athena/service/Athenanet.MDP.*"
        }).then(res=> resolve(res?.data?.access_token)).catch(() => reject(''))
    })
}


const api = {

    getAuth: async (request) => axios.get(
        request.url,
        {
            headers: { "Authorization": "Bearer " + await getToken(), "accept": "application/json" }
        }
    ),
    postAuth: async (request) => axios.post(
        request.url,
        request.data,
        {
            headers: { "Authorization": "Bearer " + await getToken(), "accept": "application/json" }
        }

    ),

}

export default api