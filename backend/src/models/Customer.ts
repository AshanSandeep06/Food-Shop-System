import { Document, Schema, model } from "mongoose";

export interface ICustomer extends Document {
    customerID: string;
    customerName: string;
    address: string;
    contactNumber: string;
    email: string;
}

const CustomerSchema = new Schema({
    customerID: {
        type: String,
        required: true,
    },

    customerName: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    contactNumber: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
}, {timestamps: true});

export const Customer = model<ICustomer>("Customer", CustomerSchema);