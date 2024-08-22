import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {getBooks, getBookSearch} from "../services/apiService";
import Search from "../components/Search";
import imgDefault from "../imgs/Suggestion1.jpg";
import {useNavigate} from "react-router-dom";
const MyBook = () => {
    const [books, setBooks] = useState([]); // State để lưu trữ danh sách sách
    const [loading, setLoading] = useState(true); // State để theo dõi trạng thái tải dữ liệu
    const navigate = useNavigate();

    useEffect(() => {
        // Gọi API và cập nhật trạng thái
        const fetchBooks = async () => {
            try {
                const response = await getBooks(); // Lấy dữ liệu từ API
                setBooks(response.data); // Giả sử response.data chứa danh sách sách
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu sách:', error);
            } finally {
                setLoading(false); // Đặt loading thành false khi dữ liệu đã được tải xong
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <p>Đang tải dữ liệu...</p>;
    }
    return (
        <div className="container">
            <Search />
            <div className="grid grid-cols-4 gap-4"> {/* Sử dụng grid với 4 cột */}
                {books.length > 0 ? (
                    books.map((result) => (
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
                    <p className="col-span-4 text-center">Loading...</p> // Đặt thông báo không tìm thấy ở giữa
                )}
            </div>
        </div>
    );
};

export default MyBook;
