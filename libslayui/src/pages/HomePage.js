import React from "react";
import ReadingChallenge from "../components/ReadingChallenge";
import TrendingBooks from "../components/TrendingBooks";
import Suggestions from "../components/Suggestions";
import HomeRightSide from "../components/HomeRightSide";
function HomePage(){

    return (
        <div className="flex flex-col bg-bg_primary p-4">
            <div className="grid grid-cols-12 gap-3 w-full">
                {/* Left Sidebar */}
                <div className="col-span-3">
                    <ReadingChallenge />
                </div>

                {/* Main Content */}
                <div className="col-span-6">
                    <TrendingBooks />
                    <div className="">
                    <Suggestions />
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="col-span-3">
                    <HomeRightSide/>
                </div>
            </div>
        </div>
    );
}
export default HomePage;