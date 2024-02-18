import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions';

function Book({book, handleEdit}) {
  const {isbn, author, editor, title, category} = book;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  }
  
  return (
    <div className='bg-slate-100 text-lg font-medium rounded-xl px-12 py-4'>
        <p className=''><span className='text-base'>Author:</span> {author.firstname} {author.lastname}</p>
        <p><span className='text-base'>Editor:</span> {editor.firstname} {editor.lastname}</p>
        <p className='mb-2'><span className='text-base'>Title:</span> {title}</p>
        <div className='flex flex-wrap gap-1 mb-4'>
            { category.map((cat, idx) => <p key={idx} className='bg-white border border-slate-200 rounded-xl px-3 pb-1'>{cat}</p>)}            
        </div>
        <div className='flex justify-end'>
          <button onClick={() => handleEdit(isbn)} className='bg-slate-600 text-white text-base font-semibold rounded-lg uppercase px-3 py-1 mr-2'>Edit</button>
          <button onClick={() => handleDelete(isbn)} className='bg-slate-600 text-white text-base font-semibold rounded-lg uppercase px-3 py-1'>Delete</button>
        </div>
    </div>
  )
}

export default Book