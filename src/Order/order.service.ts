import Book from "../Product-Model/Book/book.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: TOrder) => {
    const { email, product, quantity, totalPrice } = payload;

    // Find the book details
    const bookData = await Book.findById(product);

    if (!bookData) {
        throw new Error('Book not found');
    }

    // Check stock
    if (bookData.quantity < quantity) {
        throw new Error('Insufficient stock available');
    }

    // Calculate correct totalPrice
    const correctTotalPrice = bookData.price * quantity;

    if (totalPrice !== correctTotalPrice) {
        throw new Error(`Incorrect totalPrice. Expected: ${correctTotalPrice}`);
    }

    // Update book stock
    bookData.quantity -= quantity;
    if (bookData.quantity === 0) bookData.inStock = false;
    await bookData.save();


      // Create order
      const order = new Order({ email, product, quantity, totalPrice });
      await order.save();
      
      return order;
}

const sumRevenue = async () => {
    const result = await Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" }
            }
        }
    ])
    return result[0]?.totalRevenue || 0;
}

export const orderService = {
    createOrder,
    sumRevenue
}