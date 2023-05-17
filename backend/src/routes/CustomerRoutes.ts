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
        this.router.get("getByCustomerID/:customerID", this.CustomerController.searchCustomerByCustomerID);
        this.router.get("getByContactNumber/:contactNumber", this.CustomerController.searchCustomerByContactNumber);
    };

    public getRouter = (): Router => {
        return this.router;
    };
};