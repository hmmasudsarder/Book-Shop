import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: TOrder) => {
    const result = await Order.create(payload);
    return result
}

export const orderService = {
    createOrder
}