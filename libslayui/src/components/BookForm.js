import React, { useState } from 'react';
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../Firebase/firebaseConfig";
import {addBook, changeInformation} from "../services/apiService";

const BookForm = ({ onSave }) => {

    const [nameBook, setNameBook] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [urlBook, setUrlBook] = useState('');
    const handleAddBook = async () => {
        const dataBook = {author,description,title:nameBook,genre,publishedDate,coverImage:urlBook};
        try {
            const response = await addBook(dataBook);
            if (response.status === 200) {
                alert("Add Book successful!");
            } else {
                alert("Add book failed. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
            console.log(error)
        }
    }
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    const handleUpload = () => {
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.error("Upload failed:", error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrlBook(downloadURL);
                    console.log('File available at', downloadURL);
                });
            }
        );
    }
    return (
        <div className="bg-bg_RecColor text-center">
            <h2>Add Book</h2>
            <div className="bg-bg_RecColor space-y-4 p-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Book Name"
                    value={nameBook}
                    onChange={(e) => setNameBook(e.target.value)}
                    className="w-full p-2 border border-gray-700 rounded"
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-2 border border-gray-700 rounded"
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border border-gray-700 rounded"
                ></textarea>

                <input
                    type="text"
                    name="Genre"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full p-2 border border-gray-700 rounded"
                />
                <input
                    type="date"
                    name="publishedDate"
                    placeholder="Published Date"
                    value={publishedDate}
                    onChange={(e) => setPublishedDate(e.target.value)}
                    className="w-full p-2 border border-gray-700 rounded text-text_Secondary"
                />
                <div>
                    <input type="file" onChange={handleFileChange}/>
                    <button className='bg-amber-600' onClick={handleUpload}>Upload</button>
                    <div className="flex items-center">
                        {/* Thanh tiến trình */}
                        <div
                            className="relative w-full h-6 bg-white rounded-full overflow-hidden shadow-inner">
                            <div
                                className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-500"
                                style={{width: `${Math.round(progress)}%`}}
                            ></div>
                        </div>
                        {/* Phần trăm */}
                        <span className="ml-2 text-black font-semibold">{Math.round(progress)}%</span>
                    </div>
                </div>
                <button className="bg-text_Secondary w-1/3 px-3 py-2 text-white rounded-full"
                        onClick={handleAddBook}
                >Save
                </button>
            </div>
        </div>
    );
};

export default BookForm;
