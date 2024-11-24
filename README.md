# Book Finder
A React.js application that allows users to search for books by title, view details like author and publication year, and see book covers. This app uses the Open Library API for fetching book data and is styled with TailwindCSS for a clean, responsive design.

## Features:-
### Search by Title:
Find books by entering their titles.
### Book Details:
View essential details, including title, author, and first publication year.
### Cover Images: 
Displays the book's cover (or a placeholder if unavailable).
### Responsive Design: 
Fully functional on desktop and mobile devices.

## Technologies Used:-
Frontend: React.js
Styling: TailwindCSS
API: Open Library Search API

## Getting Started:-
Prerequisites
Node.js (v14 or later recommended)
npm or yarn

## APIs
This application uses the Open Library API to fetch book data.

## EndPoint-
https://openlibrary.org/search.json?title={bookTitle}

## Response Fields Used:
title: Title of the book.
author_name: List of authors.
first_publish_year: Year the book was first published.
cover_i: ID for the book cover.

## Future Enhancements:-
Filters: Add options to filter by author, language, or publication year.
Favorites: Allow users to save favorite books for easy access.
Pagination: Display search results across multiple pages.

## License:-
This project is licensed under the MIT License.

## Acknowledgements:-
Open Library for their API.
TailwindCSS for their excellent utility-first CSS framework.
