import { Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async(req: Request, res: Response) => {
    try {
        const body = req.body;
        const result = await orderService.createOrder(body);
        res.json({
            message: 'Order created successfully',
            status: true,
            data: result
        });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Internal server error', status: false });
    }
}

export const orderController = {
    createOrder
}