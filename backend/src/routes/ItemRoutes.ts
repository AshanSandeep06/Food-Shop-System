import express, { Router } from "express";
import ItemController from "../controllers/ItemController";

export default class ItemRoutes {
    constructor(){
        this.configRoutes();
    }

    private router: Router = express.Router();
    private ItemController: ItemController = new ItemController();

    private configRoutes = (): void => {
        this.router.get("/", this.ItemController.getAllItems);
        this.router.post("/", this.ItemController.saveItem);
        this.router.put("/", this.ItemController.updateItem);
        this.router.delete("/:itemCode", this.ItemController.deleteItem);
        this.router.get("/:itemCode", this.ItemController.searchItem);
    };

    public getRouter = (): Router => {
        return this.router;
    };
}