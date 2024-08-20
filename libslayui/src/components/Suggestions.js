import React from 'react';
import book_suggest from '../imgs/Suggestion1.jpg';

function Suggestions() {
    return (
        <div className="bg-bg_primary p-6 rounded-lg shadow-lg">
            <h2 className="text-text_Secondary text-left font-bold">Suggestions</h2>
            <div className="grid grid-cols-4 gap-4 mt-4">

                <img src={book_suggest} alt="Book 1" className="rounded-lg"/>
                <img src={book_suggest} alt="Book 2" className="rounded-lg"/>
                <img src={book_suggest} alt="Book 3" className="rounded-lg"/>
                <img src={book_suggest} alt="Book 4" className="rounded-lg"/>

            </div>
        </div>
    );
}

export default Suggestions;
