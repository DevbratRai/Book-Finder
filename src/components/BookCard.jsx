import React from 'react';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{book.title}</h2>
        <p className="text-sm text-gray-600">{book.author_name}</p>
        <p className="text-sm text-gray-500">
          First published: {book.first_publish_year || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
