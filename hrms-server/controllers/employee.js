import {
  registerEmployee as registerEmployeeService,
  findEmployeeByEmail,
  login as loginService,
} from "../services/employee.js";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import logger from "../loggers/index.js";

export async function registerEmployee(req, res) {
  try {
    const data = req.body;

    data.password = bcrypt.hashSync(data.password, 10);

    const result = await registerEmployeeService(data);
    if (!result) {
      return res.status(409).json({
        message: "Employee already exists",
      });
    }

    res.status(200).json({
      message: "Employee registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error registering employee",
      error: error.message,
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const employee = await findEmployeeByEmail(email);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const passwordMatch = await bcrypt.compare(password, employee.password);
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: employee._id, role: "employee" }, "secret", {
      expiresIn: "24h",
    });
    await loginService({ email, password, token });
    logger.info(`Employee registered: ${req.body.email}`);
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error logging in",
      error: error.message,
    });
  }
}
