import axios from 'axios';

const API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';

export const fetchAPI = async (path) => {
    try {
        const url = `${API_URL}${path}`;
        console.log('Fetching from URL:', url); // Debug log
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};
