import express, { Router } from "express";
import ReservationController from "../controllers/ReservationController";

export default class ReservationRoutes {

    private router: Router = express.Router();
    private ReservationController: ReservationController = new ReservationController();

    constructor() {
        this.configRoutes();
    }

    private configRoutes = (): void => {
        this.router.get("/", this.ReservationController.getAllReservations);
        this.router.post("/", this.ReservationController.saveReservation);
        this.router.put("/", this.ReservationController.updateReservation);
        this.router.delete("/:reservationID", this.ReservationController.deleteReservation);
        this.router.get("/:reservationID", this.ReservationController.searchReservation);
    };

    public getRouter = (): Router => {
        return this.router;
    };
};