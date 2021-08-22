import React from 'react'

const SearchInput = () =>{
    return (
      <div className="hidden sm:block">
        <input
          type="text"
          placeholder="Search"
          className="w-54 h-lg p-1 rounded-sm border border-grey-600 focus:border-blue-500"
        />
      </div>
    );
}

export default SearchInput;