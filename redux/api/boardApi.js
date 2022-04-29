import axios from 'axios';

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "content-Type": "application/json",
    Authorization: "JWT fetching..."
}

export const addBoardApi = async (payload) => {
    try{
        const response = await axios.post(`${SERVER}/board/add`, payload, {headers})
        return response.data
    }catch(error){
        return error
    }
}

export const delBoardApi = async (payload) => {
    try {
        const response= await axios.post( 
            `${SERVER}/board/delUserApi`, payload,
            {headers} 
        )    
    }catch(err){
        return err;
    }
}