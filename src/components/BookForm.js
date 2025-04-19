import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; 
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import React, { useState, useEffect } from 'react';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    status: 'To Read',
    description: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:4000/books/${id}`)
        .then(response => {
          setBook(response.data);
        })
        .catch(error => console.error('Error fetching book data:', error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Update book
      axios.put(`http://localhost:4000/books/${id}`, book)
        .then(() => {
          navigate('/books');
        })
        .catch((error) => {
          console.error('Error updating book:', error);
        });
    } else {
      // Create new book
      axios.post('http://localhost:4000/books', book)
        .then(() => {
          navigate('/books');
        })
        .catch((error) => {
          console.error('Error creating book:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
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
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={book.status}
            onChange={(e) => setBook({ ...book, status: e.target.value })}
            label="Status"
          >
            <MenuItem value="To Read">To Read</MenuItem>
            <MenuItem value="Reading">Reading</MenuItem>
            <MenuItem value="Finished">Finished</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Save
      </Button>
    </form>
  );
};

export default BookForm;
