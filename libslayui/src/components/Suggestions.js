import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/apiService';
import imgDefault from '../imgs/Suggestion1.jpg';
import {useNavigate} from "react-router-dom";
function Suggestions() {
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
        <div className="bg-bg_primary p-6 h-full rounded-lg">
            <h2 className="text-text_Secondary text-left font-bold">Suggestions</h2>  
            <div className="grid grid-cols-4 gap-4 mt-4">
                {books.map((book) => (
                    <div key={book.id} className="flex items-center justify-center">
                        <img
                            onClick={() => navigate(`/book-detail?query=${book.bookId}`)}
                            src= {book.coverImageUrl||imgDefault} // Thay đổi đường dẫn hình ảnh theo dữ liệu API
                            alt={book.title} // Sử dụng tên sách cho thuộc tính alt
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Suggestions;
