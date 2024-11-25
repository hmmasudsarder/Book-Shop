import { NextFunction, Request, Response } from "express";
import { orderService } from "./order.service";

const createOrder = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const result = await orderService.createOrder(body);
        res.json({
            message: 'Order created successfully',
            status: true,
            data: result
        });
    } catch (error) {
        console.error('Somthing went worring:', error);
        res.status(500).json({ message: 'Internal server error', status: false });
        next()
    }
}

const getRevenue = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const revenue = await orderService.sumRevenue();
        res.json({
            message: 'Revenue calculated successfully',
            status: true,
            data: {revenue}
        });
    } catch (error) {
        console.error('Somthing went worring:', error);
        res.status(500).json({ message: 'Internal server error', status: false });
        next()
    }
}

export const orderController = {
    createOrder,
    getRevenue
}