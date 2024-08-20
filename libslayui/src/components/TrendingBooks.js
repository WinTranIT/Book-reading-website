import React, { useState, useEffect } from 'react';
import BookTrending from '../imgs/BookTrending.jpg';
import { getBookLatest } from '../services/apiService';

const TrendingBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await getBookLatest();
                setBooks(response.data); // Lưu dữ liệu sách vào state
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchBooks();
    }, []); // Chạy một lần khi component được mount

    const boxStyle =
        'bg-neutral-100 border-2 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden';

    return (
        <div>
            <h2 className='text-text_Secondary font-bold text-center mb-4'>Trending Books</h2>
            <div className='grid md:grid-cols-4 auto-rows-[250px] gap-4 mb-3'>
                {books.map((item, i) => (
                    <div
                        key={i}
                        className={`${boxStyle} ${
                            i === 2 || i === 4 ? 'md:col-span-2' : ''
                        } ${i === 1 ? 'md:col-span-3' : ''} ${i === 0 ? 'md:row-span-2' : ''}`}
                        style={{ backgroundImage: `url(${item.coverImageUrl || BookTrending})`, backgroundSize: 'cover' }}
                    >
                        <div className='bg-black bg-opacity-50 backdrop-blur w-full h-full absolute inset-0 z-0'></div>
                        <div className='flex flex-col items-center z-10 text-center text-white'>
                            <img className="h-16 w-16 rounded-full mb-2" src={item.coverImageUrl || BookTrending} alt={item.title} />
                            <h2 className='text-lg text-black font-bold'>{item.title}</h2>
                            <span className='text-black'>{item.author}</span>
                            <div className='flex justify-center mt-2'>
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        className='w-5 h-5 text-yellow-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                    >
                                        <path
                                            d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.588 4.885a1 1 0 00.95.69h5.127c.969 0 1.371 1.24.588 1.81l-4.153 3.019a1 1 0 00-.363 1.118l1.588 4.885c.3.921-.755 1.688-1.54 1.118l-4.153-3.019a1 1 0 00-1.175 0l-4.153 3.019c-.784.57-1.838-.197-1.539-1.118l1.588-4.885a1 1 0 00-.363-1.118L.86 10.312c-.783-.57-.38-1.81.588-1.81h5.127a1 1 0 00.95-.69l1.588-4.885z'/>
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingBooks;
