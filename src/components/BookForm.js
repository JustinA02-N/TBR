import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    status: 'To Read',
  });

  useEffect(() => {
    if (id) {
      // Fetch book data by id (mocked for now)
      const fetchedBook = {
        title: '1984',
        author: 'George Orwell',
        description: 'Dystopian novel.',
        status: 'Reading',
      };
      setBook(fetchedBook);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In actual app, use axios to send data to the backend
    console.log('Form submitted:', book);
    navigate('/books');
  };

  return (
    <div>
      <h2>{id ? 'Edit Book' : 'Add New Book'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          required
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Author"
          fullWidth
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          required
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={book.description}
          onChange={(e) => setBook({ ...book, description: e.target.value })}
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Status"
          select
          fullWidth
          value={book.status}
          onChange={(e) => setBook({ ...book, status: e.target.value })}
          style={{ marginBottom: '16px' }}
        >
          <option value="To Read">To Read</option>
          <option value="Reading">Reading</option>
          <option value="Finished">Finished</option>
        </TextField>
        <Button variant="contained" color="primary" type="submit">
          {id ? 'Save Changes' : 'Add Book'}
        </Button>
      </form>
    </div>
  );
};

export default BookForm;
