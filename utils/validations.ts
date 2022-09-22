import { LogCreateType, userCreate } from "./../types";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import { ErrorMessage } from "formik";
const prisma = new PrismaClient();
export const userValidation = async (user: userCreate) => {
  const errors: { error: string }[] = [];
  const { firstName, lastName, email, password, age, height, weight, gender } =
    user;

  if (!firstName) {
    console.log(user);
    errors.push({ error: "firstName is required!" });
  }
  if (!lastName) {
    errors.push({ error: "lastName is required!" });
  }
  if (!age) {
    errors.push({ error: "age is required!" });
  }
  if (!height) {
    errors.push({ error: "heigth is required!" });
  }
  if (!weight) {
    errors.push({ error: "weigth is required!" });
  }
  if (!gender) {
    errors.push({ error: "gender is required!" });
  }
  if (!password) {
    errors.push({ error: "password is required!" });
  } else {
    if (!validator.isStrongPassword(password)) {
      errors.push({
        error:
          "password should be strong!{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}",
      });
    }
  }
  if (!email) {
    errors.push({ error: "email is required!" });
  } else {
    if (!validator.isEmail(email)) {
      errors.push({ error: "email should be valid !" });
    }
    const user = await prisma.user.findFirst({ where: { email } });
    if (user) {
      errors.push({ error: "email is Already exist!" });
    }
  }
  return errors;
};

export const signInValidation = async (user: {
  email: string;
  password: string;
}) => {
  const errors: { error: string }[] = [];
  const { email, password }: { email: string; password: string } = user;
  if (!email) {
    errors.push({ error: "email is required!" });
  } else {
    if (!validator.isEmail(email)) {
      errors.push({ error: "email should be vaild !" });
    }
  }
  if (!password) {
    errors.push({ error: "password is required!" });
  }
  return errors;
};
export const LogValidation =  (log: LogCreateType) => {
  const errors: { error: string }[] = [];
  const { step, userReps, userWeights, workoutlineId, userId } = log;
  if (!step) {
    errors.push({ error: "step is required!" });
  }

  if (!userReps) {
    errors.push({ error: "userReps is required!" });
  }
  if (!userWeights) {
    errors.push({ error: "userWeights is required!" });
  }
  if (!workoutlineId) {
    errors.push({ error: "workoutlineId is required!" });
  }
  if (!userId) {
    errors.push({ error: "userId is required!" });
  }
  return errors;
};
