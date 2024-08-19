import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="bg-gradient-to-r from-gray-200 to-gray-400 p-4 rounded-lg shadow-lg flex items-center space-x-4">
            <img
                src=""
                alt="Book Cover"
                className="w-16 h-16 rounded-full border-2 border-white"
            />
            <div>
                <h3 className="text-lg font-semibold">""</h3>
                <p className="text-sm text-gray-700">hshgd</p>
                <p className="text-sm text-gray-500">sdggsdgsg</p>
            </div>
            <div className="ml-auto">
                <div className="flex items-center space-x-1">
                    {[...Array()].map((_, i) => (
                        <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.588 4.885a1 1 0 00.95.69h5.127c.969 0 1.371 1.24.588 1.81l-4.153 3.019a1 1 0 00-.363 1.118l1.588 4.885c.3.921-.755 1.688-1.54 1.118l-4.153-3.019a1 1 0 00-1.175 0l-4.153 3.019c-.784.57-1.838-.197-1.539-1.118l1.588-4.885a1 1 0 00-.363-1.118L.86 10.312c-.783-.57-.38-1.81.588-1.81h5.127a1 1 0 00.95-.69l1.588-4.885z" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookCard;
