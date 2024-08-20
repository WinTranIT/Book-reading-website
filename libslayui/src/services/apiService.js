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