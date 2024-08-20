import React from 'react';

function Search() {
    return (
        <form className="w-2/3 h-1/2 mx-auto p-4">
            <label htmlFor="default-search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="text-text_Secondary dark:text-text_Secondary h-2/3 w-2/3" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search"
                       className="block shadow w-full p-3 pl-10 text-center text-text_Secondary rounded-full bg-white focus:ring-blue-500 dark:bg-gray-700 dark:placeholder-text_Secondary dark:text-text_Secondary dark:focus:ring-blue-500 "
                       placeholder="Search Your Books" required/>
                <button type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-bg_contactForm hover:bg-bg_RecColor font-medium rounded-full text-sm px-4 py-2 dark:bg-text_Secondary dark:hover:bg-gray-700">Search
                </button>
            </div>
        </form>
    );
}

export default Search;
