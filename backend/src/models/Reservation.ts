import { Document, Schema, model } from "mongoose";

export interface IReservation extends Document {
    reservationID: string;
    customerID: string;
    reservationDate: string;
    reservationTime: string;
    totalParticipants: number;
    reservationStatus: string;
};

const ReservationSchema = new Schema({
    reservationID: {
        type: String,
        required: true,
    },

    customerID: {
        type: String,
        required: true,
    },

    reservationDate: {
        type: String,
        required: true,
    },

    reservationTime: {
        type: String,
        required: true,
    },

    totalParticipants: {
        type: Number,
        required: true,
    },

    reservationStatus: {
        type: String,
        required: true,
    },
});

export const Reservation = model<IReservation>("Reservation", ReservationSchema);