import { Document, Schema, model } from "mongoose";

export interface IPayment extends Document {
    paymentID: string;
    orderID: string;
    customerID: string;
    totalAmount: number;
    cash: number;
    balance: number;
};

const PaymentSchema = new Schema({
    paymentID: {
        type: String,
        required: true,
    },

    orderID: {
        type: String,
        required: true,
    },

    customerID: {
        type: String,
        required: true,
    },

    totalAmount: {
        type: Number,
        required: true,
    },

    cash: {
        type: Number,
        required: true,
    },

    balance: {
        type: Number,
        required: true,
    },
}, {timestamps: true});

export const Payment = model<IPayment>("Payment", PaymentSchema);