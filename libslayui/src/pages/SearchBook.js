import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getBookSearch } from "../services/apiService";
import Search from "../components/Search";
import imgDefault from "../imgs/Suggestion1.jpg";
import {useNavigate} from "react-router-dom";
const SearchBook = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    // Extract query from URL
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const fetchBooks = async (query) => {
            if (query) {
                try {
                    const response = await getBookSearch(query);
                    setResults(response.data);
                } catch (error) {
                    console.error("Error fetching search results:", error);
                }
            }
        };

        fetchBooks(query); // Gọi hàm fetchBooks

    }, [query]); // Thêm query vào mảng phụ thuộc

    return (
        <div className="container">
            <Search />
            <h2 className="text-center text-2xl font-bold my-4">Search Results for: {query}</h2>
            <div className="grid grid-cols-4 gap-4"> {/* Sử dụng grid với 4 cột */}
                {results.length > 0 ? (
                    results.map((result) => (
                        <div key={result.id} className="flex items-center justify-center">
                            <img
                                onClick={() => navigate(`/book-detail?query=${result.bookId}`)}
                                src={result.coverImageUrl || imgDefault} // Thay đổi đường dẫn hình ảnh theo dữ liệu API
                                alt={result.title} // Sử dụng tên sách cho thuộc tính alt
                                className="rounded-lg w-full h-auto"
                            />
                        </div>
                    ))
                ) : (
                    <p className="col-span-4 text-center">No results found.</p> // Đặt thông báo không tìm thấy ở giữa
                )}
            </div>
        </div>
    );
};

export default SearchBook;
