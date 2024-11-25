import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please fill a valid email address"]
  },
  product: {
    type: String,
    required: [true, "Please select a product"],
  },
  quantity: {
    type: Number,
    required: [true, "Please provide the quantity Number"],
    min: [0, "Quantity must be greater than or equal to 0"],
  },
  totalPrice: {
    type: Number,
    required: [true, "Please provide the Number for total price"],
    validate: {
      validator: function(v: number) {
        return v >= 1;
      },
      message: "Total price must be greater than or equal to 1"
    }
  },
}, {
  timestamps: true,
});

const Order = model<TOrder>("Orders", orderSchema);

export default Order;