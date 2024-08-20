import React from 'react';
import HomeRight from '../imgs/HomeRight.png';

function HomeRightSide() {
    return (
        <div className="bg-bg_RecColor border-1 border-black w-full h-full p-6 rounded-lg">
            <h2 className="font-bold">Welcome to LIBSLAY</h2>
            <p className="mt-2 text-xl">Meet your favorite book, find your reading community, and manage your reading life.</p>
            <div className="relative bg-[#A4C0ED] flex items-center flex-col mt-4 rounded-xl">
                <h2 className="absolute top-6 text-text_Logo font-bold mb-0">LIBSLAY</h2>
                <img src={HomeRight} alt="Award Banner" className="rounded-lg" />
                <span className="text-text_Logo font-bold text-2xl">Announcing the Best Books of 2024</span>
            </div>
            <div className="mt-4">
                <h3 className="font-bold">Work With Us</h3>
                <ul className="text-2xl mt-2 space-y-1">
                    <li>Authors</li>
                    <li>Advertise</li>
                    <li>Authors & Ads Blog</li>
                </ul>
            </div>
        </div>
    );
}

export default HomeRightSide;
