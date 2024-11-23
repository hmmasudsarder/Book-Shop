import { Request, Response } from "express";
import { bookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const result = await bookService.createBook(body);
        res.json({
            message: "Book created successfully",
            success: true,
            data: result
        })
    } catch (error) {
        res.json({
            message: "Validation failed",
            success: false,
            error
        })
    }
}

const getAllBook = async (req: Request, res: Response) => {
    try {
        const result = await bookService.getBook();
        res.json({
            message: "Books retrieved successfully",
            success: true,
            data: result
        })
    } catch (error) {
        res.json({
            message: "Somthing went worring",
            success: false,
            error
        })
    }
}

const getSingleBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await bookService.getSingleBook(id);
        res.json({
            message: "Book retrieved successfully",
            success: true,
            result
        })
    } catch (error) {
        res.json({
            message: "Somthing went worring",
            success: false,
            error
        })
    }
}
const updateBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const result = await bookService.updateBook(id, body);
        res.json({
            message: "Book updated successfully",
            status: true,
            result
        })
    } catch (error) {
        res.json({
            message: "Somthing went worring",
            success: false,
            error
        })
    }
}
const deleteBook = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await bookService.deleteBook(id);
        res.json({
            message: "Book deleted successfully",
            status: true,
            data: {}
        })
    } catch (error) {
        res.json({
            message: "Somthing went worring",
            success: false,
            error
        })
    }
}

export const bookController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook
}