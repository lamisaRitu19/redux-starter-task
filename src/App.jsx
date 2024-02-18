import { useState } from 'react'
import './App.css'
import Book from './components/Book'
import BookInput from './components/BookInput'
import { useSelector } from 'react-redux'

function App() {
  const [editable, setEditable] = useState(false);
  const [editBookId, setEditBookId] = useState(false);
  const bookList = useSelector(state => state.bookList);

  const handleEdit = (id) => {
    setEditable(true);
    setEditBookId(id);
  }

  return (
    <div className='container mx-auto py-10'>
      <h3 className='text-3xl font-semibold text-center'>List of Books</h3>
      <div className='grid grid-cols-3 gap-3 mt-6'>
        {
          bookList.map(book => <Book key={book.isbn} book={book} handleEdit={handleEdit}></Book>)
        }
      </div>
      <BookInput editBookId={editBookId} editable={editable} setEditable={setEditable}></BookInput>
    </div>
  )
}

export default App
