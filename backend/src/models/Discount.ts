import { Schema, model } from "mongoose";

export interface IDiscount extends Document {
    discountID: string;
    discountPrice: string;
    itemCode: string;
    startDate: string;
    endDate: string;
};

const DiscountSchema = new Schema({
    discountID: {
        type: String,
        required: true,
    },

    discountPrice: {
        type: String,
        required: true,
    },

    itemCode: {
        type: String,
        required: true,
    },

    startDate: {
        type: String,
        required: true,
    },

    endDate: {
        type: String,
        required: true,
    },
});

export const Discount = model("Discount", DiscountSchema);