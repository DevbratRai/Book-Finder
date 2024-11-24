import React from 'react';

const SearchBar = ({ query, setQuery, fetchBooks }) => {
  const handleSearch = () => {
    if (query.length === 0) {
      setQuery('');
    }
    if (query.trim()) {
      fetchBooks(query);
    }
  };

  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a book..."
        className="w-full max-w-md p-2 border rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
