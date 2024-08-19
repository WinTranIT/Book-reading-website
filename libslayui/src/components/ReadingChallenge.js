import React from 'react';
import ReadingChallengeimg from './ReadingChallenge';

function ReadingChallenge() {
    return (
        <div className="bg-bg_RecColor p-6 rounded-lg shadow-lg w-1/4 h-5/6">
            <h2 className="text-xl font-bold text-center mb-4">2024 READING CHALLENGE</h2>
            <p className="text-center mb-4 ">Challenge Your Self to Read More This Year</p>
            <div className="flex justify-center mb-4">
                <img src={ReadingChallengeimg} alt="Reading Challenge" className="rounded-lg" />
            </div>
            <div className="text-center">
                <button className="bg-[#D9D9D9] text-black px-4 py-2 rounded-full mb-4">I Want to Read</button>
            </div>
            <div className="flex justify-center items-center mb-4">
                <button className="bg-[#D9D9D9] text-black rounded-full p-2 mr-2">➕</button>
                <span className="text-2xl">12</span>
                <button className="bg-[#D9D9D9] text-black rounded-full p-2 ml-2">➖</button>
            </div>
            <p className="text-center mb-4">You Can Change Your Goal at Any Time</p>
            <div className="text-center mb-4">
                <h3 className="text-lg font-semibold">THE BOOK SHELVES</h3>
                <ul className="mt-2 space-y-1">
                    <li>Want to Read (0)</li>
                    <li>Currently Reading (0)</li>
                    <li>Completed (0)</li>
                </ul>
            </div>
            <div className="flex justify-around mt-4">
                <i className="fab fa-google"></i>
                <i className="fab fa-apple"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
            </div>
        </div>
    );
}

export default ReadingChallenge;
