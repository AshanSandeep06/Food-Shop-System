import { Document, Schema, model } from "mongoose";

export interface IOrder extends Document {
    orderID: string;
    orderDate: string;
    orderTime: string;
    subTotal: number;
    deliveryFee: number;
    totalCost: number;
    orderStatus: string;
    orderLocation: string;
    customerID: string;
};

const OrderSchema = new Schema({
    orderID: {
        type: String,
        required: true,
    },

    orderDate: {
        type: String,
        required: true,
    },

    orderTime: {
        type: String,
        required: true,
    },

    subTotal: {
        type: Number,
        required: true,
    },

    deliveryFee: {
        type: Number,
        required: true,
    },

    totalCost: {
        type: Number,
        required: true,
    },

    orderStatus: {
        type: String,
        required: true,
    },

    orderLocation: {
        type: String,
        required: true,
    },

    customerID: {
        type: String,
        required: true,
    },
}, {timestamps: true});

export const Order = model<IOrder>("Order", OrderSchema);