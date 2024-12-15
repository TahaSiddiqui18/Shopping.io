import React from "react";

const Navbar = () => {
    return (
        <>
            <div className="md:flex hidden flex-col md:flex-row items-center justify-between px-4 py-2 space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-800 ">
                <div className="flex items-center space-x-2">
                    <span>Category</span>
                    <span className="cursor-pointer">▼</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span>Product type</span>
                    <span className="cursor-pointer">▼</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span>Price</span>
                    <span className="cursor-pointer">▼</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span>Brand</span>
                    <span className="cursor-pointer">▼</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span>Sorting by:</span>
                    <span>Date added</span>
                    <span className="cursor-pointer">▼</span>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between px-4 py-2 space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-800 sm:hidden">
                <div className="flex items-center justify-center md:justify-start space-x-2 bg-[#F9F9F9] py-2 px-4 rounded-md w-full md:w-auto">
                    <span className="text-[#2A254B]">Filters</span>
                    <span className="cursor-pointer">▼</span>
                </div>

                <div className="flex items-center justify-center md:justify-start space-x-2 bg-[#F9F9F9] py-2 px-4 rounded-md w-full md:w-auto">
                    <span className="text-[#2A254B]">Sorting</span>
                    <span className="cursor-pointer">▼</span>
                </div>
            </div>
        </>
    );
}
export default Navbar;