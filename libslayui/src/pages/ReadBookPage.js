import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "../components/Search";
import book from "../imgs/book.jpg";

const pagesContent = [
    [
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.","Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall."
    ],
    [
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall."
    ],
    [
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall."
    ],
    [
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall."
    ],
    [
        "Harry knew instantly that this was what had been watching him out of the garden hedge that morning.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall.",
        "Harry managed not to shout out, but it was a close thing. The little creature on the bed had large, bat like ears and bulging green eyes the size of tennis balls. Harry knew instantly, that this was what had been watching him out of the garden hedge that morning.",
        "As they stared at each other, Harry heard Dudley’s voice from the hall."
    ]
];

const ReadBookPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = pagesContent.length; // Tổng số trang

    const handleNextPage = () => {
        if (currentPage < totalPages) {
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
            <Search/>
            <div className="container-fluid min-vh-100 d-flex flex-column justify-content-between p-4"
                 style={{maxWidth: '800px'}}>
                {/* Thanh điều hướng */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 style={{fontFamily: "'Sedgwick Ave', cursive"}} className="text-center flex-grow-1 mb-0">Once
                        There Were Wolves</h1>
                    <button style={{backgroundColor: '#ecf2d5'}} className="btn btn-light" onClick={handleReloadChapter}>
                        <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" className="bi bi-arrow-clockwise">
                            <path
                                d="M23,12A11,11,0,0,1,4.963,20.451l-.256.256A1,1,0,0,1,4,21a.987.987,0,0,1-.383-.076A1,1,0,0,1,3,20V18a1,1,0,0,1,1-1H6a1,1,0,0,1,.707,1.707l-.322.322A9,9,0,1,0,3,12a9.107,9.107,0,0,0,.18,1.8,1,1,0,0,1-1.96.4A11,11,0,1,1,23,12ZM12,5a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H13V6A1,1,0,0,0,12,5Z"></path>
                        </svg>
                    </button>
                </div>

                <hr className="my-4"/>
                {/* Thanh điều hướng trang/chương */}
                <div style={{marginBottom: '10px'}}
                     className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-secondary" onClick={handlePreviousPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </button>
                    <div className="text-center">
                        <span>Chap {currentPage}: Hello</span><br/>
                        <small>{currentPage}/{totalPages}</small>
                    </div>
                    <button className="btn btn-secondary" onClick={handleNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
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
                            textAlign: 'left'
                        }}>
                            {pagesContent[currentPage - 1].map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>

                <hr className="my-4"/>
                {/* Thanh điều hướng trang/chương */}
                <div style={{marginBottom: '15px', marginTop: '8px'}}
                     className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-secondary" onClick={handlePreviousPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </button>
                    <div className="text-center">
                        <span>Chap {currentPage}: Hello</span><br/>
                        <small>{currentPage}/{totalPages}</small>
                    </div>
                    <button className="btn btn-secondary" onClick={handleNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                             className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <div className="more-edition mt-4">
                    <h4 style={{fontFamily: "'Sedgwick Ave', cursive"}}>Readers also Enjoyed</h4>
                    <div className="d-flex justify-content-between">
                        <div className="text-center">
                            <img src={book} className="img-fluid" alt="eBook Edition"/>
                            <p className="mt-2"><strong>eBook</strong><br/>Edition Name<br/>Year</p>
                        </div>
                        <div className="text-center">
                            <img src={book} className="img-fluid" alt="Hardcover Edition"/>
                            <p className="mt-2"><strong>Hardcover</strong><br/>Edition Name<br/>Year</p>
                        </div>
                        <div className="text-center">
                            <img src={book} className="img-fluid" alt="Hardcover Edition"/>
                            <p className="mt-2"><strong>Hardcover</strong><br/>Edition Name<br/>Year</p>
                        </div>
                        <div className="text-center">
                            <img src={book} className="img-fluid" alt="Kindle Edition"/>
                            <p className="mt-2"><strong>Kindle</strong><br/>Edition Name<br/>Year</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookPage;
