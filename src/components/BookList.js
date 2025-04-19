import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/books') 
      .then(response => {
        setBooks(response.data);  
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div>
      <Link to="/add" className="btn btn-primary mb-3">+ Add Book</Link>
      <ul className="list-group">
        {books.map((book) => (
          <li className="list-group-item d-flex justify-content-between" key={book._id}>
            <span>{book.title} by {book.author} — {book.status}</span>
            <span>
              <Link to={`/books/${book._id}`} className="btn btn-sm btn-outline-secondary mx-1">View</Link>
              <Link to={`/edit/${book._id}`} className="btn btn-sm btn-outline-primary">Edit</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
