import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import BookForm from './BookForm';
import { deleteBook, getBooks } from '../services/apiService';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null); // Thêm để lưu thông tin sách cần chỉnh sửa

    useEffect(() => {

        const fetchBooks = async () => {

            try {
                const response = await getBooks();
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [books]);

    const handleClose = () => setShow(false);

    const onDelete = async (id) => {
        try {
            console.log(id);
            const response = await deleteBook(id);
            if (response.status === 200) {
                alert('Delete successful!');
            }
        } catch (error) {
            console.error('Error deleting book:', error);

        }
    };

    const onEdit = (book) => {
        setSelectedBook(book); // Lưu thông tin sách để sử dụng trong form
        setShow(true);
    };

    return (
        <div>
            <h2 className="font-bold text-text_Secondary">Book List</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="w-3/4 flex flex-row-reverse">
                    <button
                        onClick={() => onEdit(null)} // Mở form trống để thêm mới
                        className="bg-text_Secondary text-white hover:bg-gray-700 w-15 px-3 py-2 rounded-2xl mr-2"
                    >
                        Add Book
                    </button>
                </div>

                {books.length > 0 ? (
                    <table className="w-3/4 m-4 bg-bg_RecColor border-black shadow rounded-2xl">
                        <thead>
                        <tr className="text-text_Secondary">
                            <th className="py-2 px-4 text-left">Image</th>
                            <th className="py-2">Title</th>
                            <th className="py-2">Author</th>
                            <th className="py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books.map((book, index) => (
                            <tr key={index} className="border-t">
                                <td className="py-2 px-4">
                                    <img src={book.coverImageUrl} alt={book.title} style={{ height: '150px', width: '100px' }} />
                                </td>
                                <td className="py-2 px-4">{book.title}</td>
                                <td className="py-2 px-4">{book.author}</td>
                                <td className="py-2 px-4">
                                    <button
                                        onClick={() => onEdit(book)}
                                        className="bg-text_Secondary hover:bg-gray-700 text-white px-2 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => onDelete(book.bookId)}
                                        className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No books available.</p>
                )}
            </div>

            <Modal show={show} onHide={handleClose}>
                <div className="modal-content">
                    <Modal.Header className="bg-bg_RecColor rounded text-center" closeButton></Modal.Header>
                    <Modal.Body className="p-0">
                        <BookForm book={selectedBook} /> {/* Truyền selectedBook vào form nếu cần */}
                    </Modal.Body>
                </div>
            </Modal>
        </div>
    );
};

export default BookList;
