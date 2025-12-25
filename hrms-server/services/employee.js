import Employee from "../models/employee.js";
import Token from "../models/token.js";
export async function registerEmployee(data) {
  try {
    const { email, firstName } = data;

    const errors = {};
    if (!email) {
      errors.message = "Email is required";
      throw errors;
    } else if (!firstName) {
      errors.message = "firstName is required";
      throw errors;
    }
    const existingEmployee = await Employee.findOne({
      $or: [{ email }, { firstName }],
    });
    if (existingEmployee) {
      return null;
    }
    return await Employee.create(data);
  } catch (error) {
    console.error("Error registering employee:", error);
    throw error;
  }
}

export async function findEmployeeByEmail(email) {
  try {
    const existingEmployee = await Employee.findOne({
      email,
    });
    if (!existingEmployee) {
      return null;
    }

    return existingEmployee;
  } catch (error) {
    console.error("Error registering employee:", error);
    throw error;
  }
}

export async function login(data) {
  try {
    return await Token.create(data);
  } catch (error) {
    console.error("Error registering employee:", error);
    throw error;
  }
}
