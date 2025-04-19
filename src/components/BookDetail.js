import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'; // Import axios to make API calls

const BookDetail = () => {
  const { id } = useParams();  // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/books/${id}`)  // Fetch book details
      .then(response => {
        setBook(response.data);
      })
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Status:</strong> {book.status}</p>
      <Link to="/books" className="btn btn-secondary">Back to List</Link>
    </div>
  );
};

export default BookDetail;
