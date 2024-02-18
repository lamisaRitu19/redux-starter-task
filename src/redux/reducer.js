import jsonData from '../../public/books.json'

const initialData = {
    bookList: jsonData
}

const bookReducer = (state=initialData, action) => {
    switch (action.type){
        case "ADD_BOOK": 
            return {
                ...state,
                bookList: [
                    ...state.bookList, action.payload
                ]
            }
        case "EDIT_BOOK": 
            const editedList = state.bookList.filter(item => item.isbn !== action.payload.id);
            editedList.push(action.payload.data);
            return {
                ...state,
                bookList: editedList
            }
        case "DELETE_BOOK": 
            const newList = state.bookList.filter(item => item.isbn !== action.id)
            return {
                ...state,
                bookList: newList
            }
        default: return state;
    }
}

export default bookReducer;