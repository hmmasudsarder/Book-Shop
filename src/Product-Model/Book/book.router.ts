import { Router } from "express";
import { bookController } from "./book.controller";

const bookRouter = Router();

bookRouter.post('/create-book', bookController.createBook);
bookRouter.get('/getSingleBook/:id', bookController.getSingleBook);
bookRouter.get('/getAllBooks', bookController.getAllBook);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.delete('/:id', bookController.deleteBook);

export default bookRouter