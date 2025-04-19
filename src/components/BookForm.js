import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    status: 'To Read',
    description: '',
  });

//   useEffect(() => {
//     axios.get()
//       .then(response => {
//         setBooks(response.data);
//       })
//       .catch(error => console.error('Error fetching books Form:', error));
//   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/books');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input
          type="text"
          id="author"
          className="form-control"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="status" className="form-label">Status</label>
        <select
          id="status"
          className="form-select"
          value={book.status}
          onChange={(e) => setBook({ ...book, status: e.target.value })}
        >
          <option value="To Read">To Read</option>
          <option value="Reading">Reading</option>
          <option value="Finished">Finished</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default BookForm;
