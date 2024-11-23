import { model, Schema } from "mongoose";
import { TBook } from "./book.interface";

const bookSchema = new Schema<TBook>({
    title: {
        type: String,
        required: [true, "Please provide your Book Title"],
        minlength: 3,
        maxlength: 50,
    },
    author: {
        type: String,
        required: [true, "Please provide your Book author Name"],
        minlength: 3,
        maxlength: 50,
    },
    price: {
        type: Number,
        required: [true, 'Please enter your Book Price'],
        min: 0
    },
    category: {
        type: String, enum: {
            values: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
            message: "{VALUE} is not valid, please provide a valid category 'Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'",
        },
        default: 'user',
        required: true,
    },
    description: {
        type: String,
        required: [true, "Please provide your Book description"],
    },
    quantity: {
        type: Number,
        required: [true, "Please provide your Book quantity"],
    },
    inStock: {
       type: Boolean, default: true
    }
})


const Book = model<TBook>("Book", bookSchema)
export default Book