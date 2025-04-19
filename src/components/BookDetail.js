import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);

//   useEffect(() => {
//     axios.get()
//       .then(response => {
//         setBooks(response.data);
//       })
//       .catch(error => console.error('Error fetching books details:', error));
//   }, []);

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
