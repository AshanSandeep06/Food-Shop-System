import { config } from "dotenv";
config();

import express, {Request, Response} from 'express';
import db from 'mongoose';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import routes from "./routes";
import multer from 'multer';
import path from "path";

const app = express();

const allowedOrigins = ["http://localhost:3000"];
app.use(cors({
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin!) !== -1 || !origin){
            callback(null, true);
        }else {
            callback(new Error("Not Allowed by CORS"));
        }
    }
}));

app.use(json());

app.use(urlencoded({ extended: true }));

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

app.put("/api/v1/item", upload.single("itemImage"), (req:Request, res:Response) => {
    console.log(req.file);
    res.send("File Upload Successfully..!");
});

app.use((error: Error, req: Request, res: Response) => {
    res.status(500).json({ message: error.message });
});

db.connect(process.env.MONGO_DB_URL!)
.then(() => {
    console.log("Database is Connected");

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server started on port ${process.env.SERVER_PORT}`);
    });
})
.catch(() => {
    console.log("Error in Connecting to Database");
});