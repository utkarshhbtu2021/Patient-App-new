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

    getAuth: async(request) => axios.get(
        request.url,
        {
            headers: { "Authorization": "Bearer " + await getToken(), "accept": "application/json" }
        }
    ),
    postAuth: async(request) => axios.post(
        request.url,
        request.data,
        {
            headers: { "Authorization": "Bearer " + await getToken(), 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', "Accept": "*/*", "Accept-Encoding": "gzip, deflate, br" }
        }

    ),
    putAuth: async(request) => axios.put(
        request.url,
        request.data,
        {
            headers: { Authorization: "Bearer " + await getToken() }
        }
    ),

}

export default api