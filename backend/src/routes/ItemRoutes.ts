import express, { Router } from "express";
import ItemController from "../controllers/ItemController";
import multer from "multer";

const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        // const directoryPath = path.join(__dirname, 'assets', 'img', 'uploads', 'itemImages');
        callback(null, "F:\\Vscode Projects\\Food Shop System\\frontend\\src\\assets\\img\\uploads\\itemImages\\");
    },

    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});

const upload = multer({ storage: fileStorage });

// app.put("/api/v1/item", upload.single("itemImage"), (req:Request, res:Response) => {
//     console.log(req.file);
//     res.send("File Upload Successfully..!");
// });

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
        this.router.put("/saveItemImages/:itemCode", upload.single("itemImage"), this.ItemController.saveItemImages);
        this.router.delete("/:itemCode", this.ItemController.deleteItem);
        this.router.get("/getItem/:itemCode", this.ItemController.searchItem);
    };

    public getRouter = (): Router => {
        return this.router;
    };
}