import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";

export default class CustomerRoutes {

    private router: Router = express.Router();
    private CustomerController: CustomerController = new CustomerController();

    constructor() {
        this.configRoutes();
    }

    private configRoutes = (): void => {
        this.router.get("/", this.CustomerController.getAllCustomers);
        this.router.post("/", this.CustomerController.saveCustomer);
        this.router.put("/", this.CustomerController.updateCustomer);
        this.router.delete("/:customerID", this.CustomerController.deleteCustomer);
        this.router.get("/:customerID", this.CustomerController.searchCustomer);
    };

    public getRouter = (): Router => {
        return this.router;
    };
};