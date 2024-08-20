import axios from 'axios';
const API_URL = "https://localhost:7092/api";

export const register = async (registerData) => {
    try{
        const response = await axios.post(`${API_URL}/User/register`, registerData);
        // respone gồm các thông tin : data là dữ liệu trả về từ api, status, headers
        // trả về data cho hàm gọi register
        return response;
    }catch(error){
        throw error;
    }
}
export const login = async (loginData) => {
    try{
        const response = await axios.post(`${API_URL}/User/login`,loginData);
        return response;
    }catch(error){
        throw error;
    }
}
export const getBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/Book`);
        return response;
    }catch(error){
        throw error;
    }
}
export const getBookLatest = async () => {
        try {
            const response = await axios.get(`${API_URL}/Book/latest`);
            return response;
        } catch (error) {
            throw error;
        }
    }
export const getBookSearch = async (titlePart) => {
    try {
        // Sử dụng đối tượng params để gửi tham số truy vấn
        const response = await axios.get(`${API_URL}/Book/search`, {
            params: { titlePart }
        });
        return response;
    } catch (error) {
        throw error;
    }
}

