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
        this.router.get("/generateNewOrderID", this.OrderController.generateNewOrderID);
        this.router.post("/", this.OrderController.purchaseOrder);
        this.router.get("/:orderID", this.OrderController.searchOrder);
        this.router.put("/:orderID/:orderStatus", this.OrderController.updateOrderStatus);
    };

    public getRouter = (): Router => {
        return this.router;
    };
}