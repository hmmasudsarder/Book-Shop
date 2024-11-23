import express, { Request, Response } from 'express'
import bookRouter from './Product-Model/Book/book.router';

const app = express();
app.use(express.json())

app.use('/api/book', bookRouter)

app.get("/", (req: Request, res: Response) => {
    res.send("server is ongoing 🏃‍♂️‍➡️☄️")
})

export default app;