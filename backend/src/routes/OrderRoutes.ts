import express, { Router } from "express";
import OrderController from "../controllers/OrderController";

export default class OrderRoutes {
    constructor(){
        this.configRoutes();
    }

    private router: Router = express.Router();
    private OrderController: OrderController = new OrderController();

    private configRoutes = (): void => {
        this.router.get("/", this.OrderController.getAllOrders);
        this.router.post("/", this.OrderController.purchaseOrder);
        this.router.get("/:orderID", this.OrderController.searchOrder);
    };

    public getRouter = (): Router => {
        return this.router;
    };
}