import axios from 'axios'

// backend server is running here 
const API_URI = 'http://localhost:5000';

export const uploadfile = async (data) => {
    try {
        const response = await axios.post(`${API_URI}/upload`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}


