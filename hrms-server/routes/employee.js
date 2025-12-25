import express from "express";
import { registerEmployee, login } from "../controllers/employee.js";

const employeeRouter = express.Router();

employeeRouter.post("/register", registerEmployee);
employeeRouter.post("/login", login);

export default employeeRouter;
