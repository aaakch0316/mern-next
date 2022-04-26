import axios, {AxiosResponse} from 'axios';

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "content-Type": "application/json",
    Authorization: "JWT fetching..."
}

export const joinApi = async (payload) => {
    try{
        const response = await axios.post(`${SERVER}/user/join`, payload, {headers})
        return response.data
    }catch(error){
        return error
    }
}

export const loginApi = async (payload) => {
    try{
        const response = axios.post(
            `${SERVER}/user/login`,
            payload,
            {headers}
        )
        const loginUser = JSON.stringify(response.data)
        localStorage.setItem("loginUser", loginUser)
        return response.data
    }catch(error){
        return error
    }
}