import { TBook } from "./book.interface";
import Book from "./book.model";

const createBook = async(payload: TBook) => {
    const result = await Book.create(payload);
    return result
};

const getBook = async () => {
    const result = await Book.find();
    return result
}

const getSingleBook = async (id: string) => {
    const result = await Book.findById(id)
    return result
}

const updateBook = async (id: string, data: TBook) => {
    const result = await Book.findByIdAndUpdate(id, data, { new: true })
    return result
}

const deleteBook = async (id: string) => {
    const result = await Book.findByIdAndDelete(id)
    return result
}

export const bookService = {
    createBook,
    getBook,
    getSingleBook,
    updateBook,
    deleteBook
}