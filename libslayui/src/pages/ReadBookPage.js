import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "../components/Search";
import bookImage from "../imgs/book.jpg"; // Đổi tên biến để không bị trùng tên
import { getBookDetail, getChapters } from "../services/apiService";
import { useLocation } from "react-router-dom";
import TrendingBooks from "../components/TrendingBooks";
import Suggestions from "../components/Suggestions";

const ReadBookPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [chapters, setChapters] = useState([]);
    const [book, setBook] = useState(null);
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');
    const [fontSize, setFontSize] = useState(16); // Kích thước chữ mặc định là 16px
    const increaseFontSize = () => setFontSize((prevSize) => prevSize + 2);
    const decreaseFontSize = () => setFontSize((prevSize) => (prevSize > 8 ? prevSize - 2 : prevSize)); // Giới hạn nhỏ nhất là 8px

    useEffect(() => {
        const fetchBook = async () => {
            if (id) {
                try {
                    const data = await getBookDetail(id);
                    setBook(data);
                } catch (error) {
                    console.error('Error fetching book details:', error);
                }
            }
        };

        fetchBook();
    }, [id]);

    useEffect(() => {
        const fetchChapters = async () => {
            if (id) {
                try {
                    const response = await getChapters(id);
                    setChapters(response.data); // Dữ liệu trả về là một mảng các chương
                } catch (error) {
                    console.error('Có lỗi xảy ra khi lấy dữ liệu chương:', error);
                }
            }
        };

        fetchChapters();
    }, [id]);

    const handleNextPage = () => {
        if (currentPage < chapters.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleReloadChapter = () => {
        setCurrentPage(1);
    };

    return (
        <div>
            <Search />
            <div className="container-fluid min-vh-100 d-flex flex-column justify-content-between p-4" style={{ maxWidth: '800px' }}>
                {/* Thanh điều hướng */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 style={{ fontFamily: "'Sedgwick Ave', cursive" }} className="text-center flex-grow-1 mb-0">{book?.title || 'Loading...'}</h1>
                    <button style={{ backgroundColor: '#ecf2d5' }} className="btn btn-light" onClick={handleReloadChapter}>
                        <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="bi bi-arrow-clockwise">
                            <path d="M23,12A11,11,0,0,1,4.963,20.451l-.256.256A1,1,0,0,1,4,21a.987.987,0,0,1-.383-.076A1,1,0,0,1,3,20V18a1,1,0,0,1,1-1H6a1,1,0,0,1,.707,1.707l-.322.322A9,9,0,1,0,3,12a9.107,9.107,0,0,0,.18,1.8,1,1,0,0,1-1.96.4A11,11,0,1,1,23,12ZM12,5a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H13V6A1,1,0,0,0,12,5Z"></path>
                        </svg>
                    </button>
                    {/* Nút điều chỉnh kích thước chữ */}
                    <div className="d-flex justify-content-end my-3">
                        <button style={{marginLeft: "10px", width:"40px", height:"40px"}} className="btn btn-outline-primary btn-circle me-2" onClick={decreaseFontSize}>
                            -
                        </button>
                        <button style={{width:"40px", height:"40px"}} className="btn btn-outline-primary btn-circle " onClick={increaseFontSize}>
                            +
                        </button>
                    </div>
                </div>

                <hr className="my-4" />
                {/* Thanh điều hướng trang/chương */}
                <div style={{ marginBottom: '10px' }} className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-secondary" onClick={handlePreviousPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <div className="text-center">
                        <span>Chap {currentPage}: {chapters[currentPage - 1]?.chapterTitle || 'Loading...'}</span><br />
                        <small>{currentPage}/{chapters.length}</small>
                    </div>
                    <button className="btn btn-secondary" onClick={handleNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>

                {/* Nội dung văn bản */}
                <div className="row flex-grow-1">
                    <div className="col-12">
                        <div className="p-4" style={{
                            borderRadius: '10px',
                            height: '800px',
                            overflowY: 'scroll',
                            textAlign: 'left',
                            fontSize: `${fontSize}px` // Áp dụng kích thước chữ cho phần nội dung
                        }}>

                            <p>{chapters[currentPage - 1]?.content || 'Loading content...'}</p>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />
                {/* Thanh điều hướng trang/chương */}
                <div style={{ marginBottom: '15px', marginTop: '8px' }} className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-secondary" onClick={handlePreviousPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <div className="text-center">
                        <span>Chap {currentPage}: {chapters[currentPage - 1]?.chapterTitle || 'Loading...'}</span><br />
                        <small>{currentPage}/{chapters.length}</small>
                    </div>
                    <button className="btn btn-secondary" onClick={handleNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
                <Suggestions/>
            </div>
        </div>
    );
};

export default ReadBookPage;
