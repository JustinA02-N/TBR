import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  
  // You can replace this with actual data fetching logic
  const book = {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the American dream.',
    status: 'Finished',
  };

  return (
    <div>
      <h2>Book Detail</h2>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Status:</strong> {book.status}</p>
    </div>
  );
};

export default BookDetail;
