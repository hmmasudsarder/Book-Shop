import { Router } from "express";
import { bookController } from "./book.controller";

const bookRouter = Router();

bookRouter.post('/', bookController.createBook);
bookRouter.get('/:productId', bookController.getSingleBook);
bookRouter.get('/', bookController.getAllBook);
bookRouter.put('/:productId', bookController.updateBook);
bookRouter.delete('/:productId', bookController.deleteBook);

export default bookRouter