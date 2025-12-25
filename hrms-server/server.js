import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config()
app.use(express.json());

import employeeRouter from "./routes/employee.js";

app.use("/api/employee", employeeRouter);

mongoose.connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log(`Server connected to database,${process.env.MONGO_URI}`);
  })
  .catch((err) => {
    console.log("Database connection error: ", err);
  });

app.listen(8001, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
