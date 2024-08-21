import React, { useState } from 'react';

const BookForm = ({ onSave }) => {
    const [book, setBook] = useState({
        name: '',
        author: '',
        description: '',
        imageUrl: '',
        genre: '',
        publishedDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(book);
        setBook({
            name: '',
            author: '',
            description: '',
            imageUrl: '',
            genre: '',
            publishedDate: '',
        });
    };

    return (
        <div className="bg-bg_RecColor text-center">
            <h2>Add Book</h2>
        <form onSubmit={handleSubmit} className="bg-bg_RecColor space-y-4 p-4">
            <input
                type="text"
                name="name"
                placeholder="Book Name"
                value={book.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded"
            />
            <input
                type="text"
                name="author"
                placeholder="Author Name"
                value={book.author}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded"
            />
            <textarea
                name="description"
                placeholder="Description"
                value={book.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded"
            ></textarea>
            <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={book.imageUrl}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded"
            />
            <input
                type="text"
                name="Genre"
                placeholder="Genre"
                value={book.genre}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded"
            />
            <input
                type="date"
                name="publishedDate"
                placeholder="Published Date"
                value={book.publishedDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded text-text_Secondary"
            />
            <button className="bg-text_Secondary w-1/3 px-3 py-2 text-white rounded-full">Save</button>
        </form>
        </div>
    );
};

export default BookForm;
