import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";
import UserController from "../controllers/UserController";

export default class UserRoutes {

    private router: Router = express.Router();
    private UserController: UserController = new UserController();

    constructor() {
        this.configRoutes();
    }

    private configRoutes = (): void => {
        this.router.get("/", this.UserController.getAllUsers);
        this.router.post("/", this.UserController.saveUser);
        this.router.put("/", this.UserController.updateUser);
        this.router.delete("/:username", this.UserController.deleteUser);
        this.router.get("getUserByCustomerID/:customerID", this.UserController.searchUserByCustomerID);
    };

    public getRouter = (): Router => {
        return this.router;
    };
};