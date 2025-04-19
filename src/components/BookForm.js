import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const BookForm = () => {
  const { id } = useParams(); // This will be used if you want to edit a book based on its ID.
  const navigate = useNavigate();

  // Static book data for testing
  const staticBookData = {
    title: 'Sample Book Title',
    author: 'Sample Author',
    description: 'This is a sample book description.',
    status: 'Reading', // Default status can be 'To Read', 'Reading', or 'Finished'
  };

  // State to manage form data
  const [book, setBook] = useState(staticBookData);

  // Effect hook to simulate loading data on component mount
  useEffect(() => {
    if (id) {
      console.log('Editing book with ID:', id);
      // In a real scenario, here you'd fetch the book data from an API
      // For now, we'll just simulate loading the static data
      setBook(staticBookData);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd send a POST or PUT request here to save the data
    console.log('Form submitted with data:', book);
    // After form submission, navigate to the list of books (or a different route)
    navigate('/books');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{id ? 'Edit Book' : 'Add Book'}</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            required
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <TextField
            fullWidth
            label="Author"
            variant="outlined"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            required
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value })}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <TextField
            fullWidth
            select
            label="Status"
            variant="outlined"
            value={book.status}
            onChange={(e) => setBook({ ...book, status: e.target.value })}
            SelectProps={{
              native: true,
            }}
          >
            <option value="To Read">To Read</option>
            <option value="Reading">Reading</option>
            <option value="Finished">Finished</option>
          </TextField>
        </div>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </form>
    </div>
  );
};

export default BookForm;
