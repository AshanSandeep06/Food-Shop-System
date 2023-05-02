import { config } from "dotenv";
config();

import express, {Request, Response} from 'express';
import db from 'mongoose';
import { json, urlencoded } from 'body-parser';