import React from 'react';

function TrendingBooks() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <h2 className="text-lg font-semibold">Trending Books</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg text-white">
                    <h3 className="font-bold">Book Name</h3>
                    <p>Author Name</p>
                    <div>★★★★★</div>
                </div>
                {/* Repeat similar divs for more books */}
            </div>
        </div>
    );
}

export default TrendingBooks;
