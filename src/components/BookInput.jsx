import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook, editBook } from '../redux/actions';

function BookInput({editBookId, editable, setEditable}) {
  const [formData, setFormData] = useState({});
//   const [selectedValue, setSelectedValue] = useState([]);
  const dispatch = useDispatch();
  const bookList = useSelector(state => state.bookList);
  const editBookData = bookList?.find(book => book.isbn === editBookId);
  console.log('check',editBookId)

  useEffect(() => {
    console.log(formData);
    if ((Object.keys(formData).length !== 0) && !editable){
        dispatch(addBook(formData));
    }
    else if ((Object.keys(formData).length !== 0) && editable){
        dispatch(editBook(editBookId, formData));
        setEditable(false);
    }
  }, [formData]);

    //   const categories = [
    //     {
    //       value: 1,
    //       label: "Technology"
    //     },
    //     {
    //       value: 2,
    //       label: "Fiction"
    //     },
    //     {
    //       value: 3,
    //       label: "Non-Fiction"
    //     },
    //     {
    //       value: 4,
    //       label: "aqua sky"
    //     },
    //     {
    //       value: 5,
    //       label: "tigerlily"
    //     },
    //     {
    //       value: 6,
    //       label: "blue turquoise"
    //     }
    //   ];
    //   const handleChange = (e) => {
    //     setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    //   }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const authorFName = form.authorFName.value;
    const authorLName = form.authorLName.value;
    const editorFName = form.editorFName.value;
    const editorLName = form.editorLName.value;
    const title = form.title.value;
    if (editable){
        setFormData({ 
            "isbn": editBookId,
            "author": {"lastname": authorLName, "firstname": authorFName}, 
            "editor": {"lastname": editorLName, "firstname": editorFName}, 
            title,
            "category": []
        });
    }else{
        setFormData({ 
            "isbn": `123-456-${Math.floor(Math.random()*(999-100+1)+100)}`,
            "author": {"lastname": authorLName, "firstname": authorFName}, 
            "editor": {"lastname": editorLName, "firstname": editorFName}, 
            title,
            "category": []
        });
    }
    form.reset();
  }
  
  return (
    <div className='bg-slate-100 rounded-xl mx-auto mt-6'>
        <h3 className='text-3xl font-semibold text-center pt-10'>Add Book</h3>
        <form onSubmit={handleSubmit} className='px-12 py-6'>
            <div className='mb-3'>
                <p className='text-xl font-medium pb-2'>Author</p>
                <div className='flex justify-between'>
                    <div className='flex w-full'>
                        <label htmlFor="">First Name</label>
                        <input 
                            type="text" 
                            name="authorFName"
                            defaultValue={editable ? editBookData.author.firstname : ""}
                            className='w-2/3 rounded-lg px-2 py-1 ml-2' />
                    </div>
                    <div className='flex justify-end w-full'>
                        <label htmlFor="">Last Name</label>
                        <input 
                            type="text" 
                            name="authorLName"
                            defaultValue={editable ? editBookData.author.lastname : ""}
                            className='w-2/3 rounded-lg px-2 py-1 ml-2' />
                    </div>
                </div>
            </div>
            <div className='mb-3'>
                <p className='text-xl font-medium pb-2'>Editor</p>
                <div className='flex justify-between'>
                    <div className='flex w-full'>
                        <label htmlFor="">First Name</label>
                        <input 
                            type="text" 
                            name="editorFName"
                            defaultValue={editable ? editBookData.editor.firstname : ""}
                            className='w-2/3 rounded-lg px-2 py-1 ml-2' />
                    </div>
                    <div className='flex justify-end w-full'>
                        <label htmlFor="">Last Name</label>
                        <input 
                            type="text" 
                            name="editorLName"
                            defaultValue={editable ? editBookData.editor.lastname : ""}
                            className='w-2/3 rounded-lg px-2 py-1 ml-2' />
                    </div>
                </div>
            </div>
            <div className='mb-3'>
                <p className='text-xl font-medium pb-2'>Title</p>
                <input 
                    type="text" 
                    name='title'
                    defaultValue={editable ? editBookData.title : ""}
                    className='w-full rounded-lg px-2 py-1 ml-2' />
            </div>
            <div className='mb-4'>
                <p className='text-xl font-medium pb-2'>Category</p>
                <select 
                    name="cars" 
                    id="cars" 
                    className='w-full rounded-lg px-2 py-1 ml-2' 
                    // value={categories.filter(obj => selectedValue.includes(obj.value))}
                    // options={categories}
                    // onChange={handleChange} 
                    multiple>
                    {/* <option value="Technology">Technology</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Fiction">Fiction</option> */}
                </select>
            </div>
            {
                editable ? 
                    <button className='bg-slate-600 text-white text-lg font-semibold rounded-lg uppercase px-6 py-1 mb-3'>Edit Book</button> :
                    <button className='bg-slate-600 text-white text-lg font-semibold rounded-lg uppercase px-6 py-1 mb-3'>Add Book</button>
            }
        </form>
    </div>
  )
}

export default BookInput