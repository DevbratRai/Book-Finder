import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const fetchBooks = async (title) => {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${title}`
      );
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-blue-500 text-white text-center">
        <h1 className="text-2xl font-bold">Book Finder</h1>
      </header>
      <main className="p-4">
        <SearchBar query={query} setQuery={setQuery} fetchBooks={fetchBooks} />
        <BookList books={books} />
      </main>
    </div>
  );
}

export default App;
