import React from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
  const books = [
    { id: 1, title: 'B1', author: 'A1' },
    { id: 2, title: 'B2', author: 'A2' },
    { id: 3, title: 'B3', author: 'A3' },
  ];

  return (
    <div>
      <h2>Book List</h2>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            <h5>{book.title}</h5>
            <p>By {book.author}</p>
            <Link to={`/books/${book.id}`} className="btn btn-primary btn-sm me-2">
              View Details
            </Link>
            <Link to={`/edit/${book.id}`} className="btn btn-secondary btn-sm">
              Edit
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/add" className="btn btn-success mt-3">
        Add New Book
      </Link>
    </div>
  );
};

export default BookList;
