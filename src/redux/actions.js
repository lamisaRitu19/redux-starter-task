export const addBook = data => {
    console.log(data)
    return {
        type: "ADD_BOOK",
        payload: data
    }
}
export const editBook = (id, data) => {
    return {
        type: "EDIT_BOOK",
        payload: {id, data}
    }
}
export const deleteBook = id => {
    return {
        type: "DELETE_BOOK",
        id
    }
}