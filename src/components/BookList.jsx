import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (!books.length) {
    return (
      <p className="text-center text-gray-600">
        No books found. Try searching for something!
      </p>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
