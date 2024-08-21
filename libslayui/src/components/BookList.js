import React, {useState} from 'react';
import BookTrending from "../imgs/BookTrending.jpg";
import Book1 from "../imgs/Book1.jpg";
import Book2 from "../imgs/Book2.jpg";
import {Button, Modal} from "react-bootstrap";
import BookForm from "./BookForm";


const books = [
    {
        name: 'BOOK NAME',
        author: 'Author Name',
        description: 'Lorem ipsum dolor sit amet.',
        image: Book1,
        rating: 4,
    },
    {
        name: 'BOOK NAME',
        author: 'Author Name',
        description: 'Lorem ipsum dolor sit amet.',
        image: Book2,
        rating: 4,
    },
    {
        name: 'BOOK NAME',
        author: 'Author Name',
        description: 'Lorem ipsum dolor sit amet.',
        image: BookTrending,
        rating: 3,
    },
    {
        name: 'BOOK NAME',
        author: 'Author Name',
        description: 'Lorem ipsum.',
        image: Book2,
        rating: 3,
    },
    {
        name: 'BOOK NAME',
        author: 'Author Name',
        description: 'Lorem ipsum',
        image: Book1,
        rating: 3,
    },
    {
        name: 'BOOK NAME',
        author: 'Author Name',
        description: 'Lorem ipsum .',
        image: Book2,
        rating: 3,
    },
    // Thêm các sách khác vào đây
];

const BookList = ({onDelete }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const onEdit = () => {
        setShow(true);

    }
    return (
        <div>
            <h2 className="font-bold text-text_Secondary">Book List</h2>
            <div className="flex flex-col justify-center items-center">
                <div className="w-3/4 flex flex-row-reverse">
                    <button
                        onClick={() => onEdit()}
                        className="bg-text_Secondary text-white hover:bg-gray-700 w-15 px-3 py-2 rounded-2xl mr-2"
                    >
                        Add Book
                    </button>
                </div>


                <table className="w-3/4 m-4 bg-bg_RecColor border-black shadow rounded-2xl ">
                    <thead>
                    <tr className="text-text_Secondary">
                        <th className="py-2 px-4 text-left">Image</th>
                        <th className="py-2">Title</th>
                        <th className="py-2">Author</th>
                        <th className="py-2">Description</th>
                        <th className="py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book, index) => (
                        <tr key={index} className="border-t">
                            <td className="py-2 px-4"><img src={book.image} style={{height: "150px", width: "100px"}}/>
                            </td>
                            <td className="py-2 px-4">{book.name}</td>
                            <td className="py-2 px-4">{book.author}</td>
                            <td className="py-2 px-4">{book.description}</td>
                            <td className="py-2 px-4">
                                <button
                                    onClick={() => onEdit(book)}
                                    className="bg-text_Secondary hover:bg-gray-700 text-white px-2 py-1 rounded mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelete(book)}
                                    className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Modal show={show} onHide={handleClose} >
                <div className="modal-content">
                    <Modal.Header className="bg-bg_RecColor rounded text-center " closeButton>
                    </Modal.Header>

                    <Modal.Body className="p-0">
                        <BookForm/>
                    </Modal.Body>

                    {/*<Modal.Footer className="bg-text_Secondary">*/}
                    {/*    <Button variant="secondary" onClick={handleClose}>Close</Button>*/}
                    {/*    <Button className="bg-text_Secondary">Save changes</Button>*/}
                    {/*</Modal.Footer>*/}
                </div>
            </Modal>

        </div>
    );
};

export default BookList;
