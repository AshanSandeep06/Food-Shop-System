import { Schema, model, Document } from "mongoose";

export interface IItem extends Document {
    itemCode: string;
    itemType: string;
    itemName: string;
    description: string;
    unitPrice: number;
    qtyOnHand: number;
};

const ItemSchema = new Schema({
    itemCode: {
        type: String,
        required: true,
    },

    itemType: {
        type: String,
        required: true,
    },

    itemName: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    unitPrice: {
        type: Number,
        required: true,
    },

    qtyOnHand: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

export const Item = model<IItem>("Item", ItemSchema);