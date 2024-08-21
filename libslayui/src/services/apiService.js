import axios from 'axios';

const API_URL = "https://localhost:7092/api";

export const register = async (registerData) => {
    try{
        // respone gồm các thông tin : data là dữ liệu trả về từ api, status, headers
        // trả về data cho hàm gọi register
        return await axios.post(`${API_URL}/User/register`, registerData);
    }catch(error){
        throw error;
    }
}
export const login = async (loginData) => {
    try{
        return await axios.post(`${API_URL}/User/login`, loginData);
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
export const getBookDetail = async (id) => {
    try {
        // Đúng cách sử dụng template string để truyền tham số id vào URL
        const response = await axios.get(`${API_URL}/Book/${id}`);
        return response.data; // trả về data để sử dụng dễ dàng hơn ở component
    } catch (error) {
        throw error;
    }
}


