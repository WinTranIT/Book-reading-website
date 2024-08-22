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
        <div className="bg-bg_primary p-4 h-full rounded-lg">
            <div className="grid grid-cols-4 gap-4">
                {books.slice(0,8).map((book) => ( // Chỉ lấy 4 cuốn sách đầu tiên
                    <div key={book.id} className="flex items-center justify-center">
                        <img
                            onClick={() => {
                                navigate(`/book-detail?query=${book.bookId}`);
                                window.location.reload(); // Reload lại trang
                            }}
                            src={book.coverImageUrl || imgDefault}
                            alt={book.title}
                            className="rounded-lg w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Suggestions;
