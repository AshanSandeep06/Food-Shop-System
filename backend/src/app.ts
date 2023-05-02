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