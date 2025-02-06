// QfgrNWU0pDNjhu4b

import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors"

const app: Express = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors())

const mongoURI: string = "mongodb+srv://rishabhta2812:QfgrNWU0pDNjhu4b@financetracker.rr8rw.mongodb.net/"

mongoose
.connect(mongoURI)
.then(()=>console.log("CONNECTED TO MONGODB!"))
.catch((err)=> console.error("FAILED TO CONNECT TO MONGODB", err))

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
     });