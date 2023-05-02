import { config } from "dotenv";
config();

import express, {Request, Response} from 'express';
import db from 'mongoose';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';

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

app.use((error: Error, req: Request, res: Response) => {
    res.status(500).json({ message: error.message });
});

db.connect(process.env.MONGO_DB_URL!)
.then(() => {
    console.log("Database is Connected");

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`);
    });
})
.catch(() => {
    console.log("Error in Connecting to Database");
});