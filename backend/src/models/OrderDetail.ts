import { Document, Schema, model } from "mongoose";

export interface IOrderDetail extends Document {
    orderID: string;
    itemCode: string;
    itemName: string;
    unitPrice: number;
    orderedQty: number;
}

const OrderDetailSchema = new Schema({
    orderID: {
        type: String,
        required: true,
    },

    itemCode: {
        type: String,
        required: true,
    },

    itemName: {
        type: String,
        required: true,
    },

    unitPrice: {
        type: Number,
        required: true,
    },

    orderedQty: {
        type: Number,
        required: true,
    },
}, {timestamps: true});

export const OrderDetail = model<IOrderDetail>("OrderDetail", OrderDetailSchema);