import express, { Router } from "express";
import PaymentController from "../controllers/PaymentController";

export default class PaymentRoutes {

    private router: Router = express.Router();
    private PaymentController: PaymentController = new PaymentController();

    constructor() {
        this.configRoutes();
    }

    private configRoutes = (): void => {
        this.router.get("/", this.PaymentController.getAllPayments);
        this.router.post("/", this.PaymentController.savePayment);
        this.router.put("/", this.PaymentController.updatePayment);
        this.router.delete("/:paymentID", this.PaymentController.deletePayment);
        this.router.get("/:paymentID", this.PaymentController.searchPayment);
    };

    public getRouter = (): Router => {
        return this.router;
    };
};