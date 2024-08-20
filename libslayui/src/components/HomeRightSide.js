import React from 'react';

function HomeRightSide() {
    return (
        <div className="bg-bg_RecColor border-1 border-black w-full h-full p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Welcome to Logo Name</h2>
            <p className="mt-2">Meet your favorite book, find your reading community, and manage your reading life.</p>
            <div className="mt-4">
                <img src="award-banner.jpg" alt="Award Banner" className="rounded-lg" />
            </div>
            <div className="mt-4">
                <h3 className="text-sm font-semibold">Work With Us</h3>
                <ul className="mt-2 space-y-1">
                    <li>Authors</li>
                    <li>Advertise</li>
                    <li>Authors & Ads Blog</li>
                </ul>
            </div>
        </div>
    );
}

export default HomeRightSide;
