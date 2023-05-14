import express, { Router } from "express";
import OrderDetailController from "../controllers/OrderDetailController";

export default class OrderDetailRoutes {
    constructor(){
        this.configRoutes();
    }

    private router: Router = express.Router();
    private OrderDetailController: OrderDetailController = new OrderDetailController();

    private configRoutes = (): void => {
        this.router.get("/", this.OrderDetailController.getAllOrderDetails);
        this.router.post("/", this.OrderDetailController.saveOrderDetail);
        this.router.get("/:orderID", this.OrderDetailController.searchOrderDetail);
    };

    public getRouter = (): Router => {
        return this.router;
    };
}