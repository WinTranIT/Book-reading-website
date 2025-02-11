import axios from 'axios';
import {queryByTestId} from "@testing-library/react";

const API_URL = "https://localhost:7092/api";

export const register = async (registerData) => {
    try {
        // respone gồm các thông tin : data là dữ liệu trả về từ api, status, headers
        // trả về data cho hàm gọi register
        return await axios.post(`${API_URL}/User/register`, registerData);
    } catch (error) {
        throw error;
    }
}
export const login = async (loginData) => {
    try {
        return await axios.post(`${API_URL}/User/login`, loginData);
    } catch (error) {
        throw error;
    }
}
<<<<<<< HEAD
export const addBook = async (bookData) => {
    try {
        return await axios.post(`${API_URL}/Book`, bookData);
    } catch (error) {
        throw error;
    }
}
=======
//phuong thuc dung de goi api
>>>>>>> d1ea59177d74f81c7b2fc3bf35ebd182141a951e
export const getBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/Book`);
        return response;
    } catch (error) {
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
            params: {titlePart}
        });
        return response;
    } catch (error) {
        throw error;
    }
}
export const sendMail = async (titlePart) => {
    try {
        // Sử dụng đối tượng params để gửi tham số truy vấn
        return await axios.post(`${API_URL}/Email/send`, titlePart);
    } catch
        (error) {
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

export const getUserByID = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/User/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const changePassword = async (titlePart) => {
    try {
        // Sử dụng đối tượng params để gửi tham số truy vấn
        return await axios.put(`${API_URL}/User/change-password`, titlePart);
    } catch (error) {
        throw error;
    }
}
export const changeInformation = async (titlePart) => {
    try {
        // Sử dụng đối tượng params để gửi tham số truy vấn
        return await axios.put(`${API_URL}/User/change-information`, titlePart);
    } catch (error) {
        throw error;
    }
}
export const getChapters = async (id) => {
    try {
        // Đúng cách sử dụng template string để truyền tham số id vào URL
        const response = await axios.get(`${API_URL}/Book/chapters/${id}`);
        return response; // trả về data để sử dụng dễ dàng hơn ở component
    } catch (error) {
        throw error;
    }
}
export const deleteBook = async (id) => {
    try {
        // Đúng cách sử dụng template string để truyền tham số id vào URL
        const response = await axios.delete(`${API_URL}/Book/${id}`);
        return response.data; // trả về data để sử dụng dễ dàng hơn ở component
    } catch (error) {
        throw error;
    }
}