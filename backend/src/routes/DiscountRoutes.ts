import express, { Router } from "express";
import DiscountController from "../controllers/DiscountController";

export default class DiscountRoutes {

    private router: Router = express.Router();
    private DiscountController: DiscountController = new DiscountController();

    constructor() {
        this.configRoutes();
    }

    private configRoutes = (): void => {
        this.router.get("/", this.DiscountController.getAllDiscounts);
        this.router.post("/", this.DiscountController.saveDiscount);
        this.router.put("/", this.DiscountController.updateDiscount);
        this.router.delete("/:discountID", this.DiscountController.deleteDiscount);
        this.router.get("/:discountID", this.DiscountController.searchDiscount);
    };

    public getRouter = (): Router => {
        return this.router;
    };
};