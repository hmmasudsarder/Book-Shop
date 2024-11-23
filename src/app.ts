import express, { Request, Response } from 'express'
import bookRouter from './Product-Model/Book/book.router';
import orderRouter from './Order/order.router';

const app = express();
app.use(express.json())

app.use('/api/products', bookRouter)
app.use('/api/orders', orderRouter)

app.get("/", (req: Request, res: Response) => {
    res.send("server is ongoing 🏃‍♂️‍➡️☄️")
})

export default app;