import { userCreate } from "./../types";
import validator from "validator";
export const userValidation = async (user: userCreate) => {
  const errors: { error: string }[] = [];
  const { firstName, lastName, email, password, dateOfBirth, height, weight } =
    user;

  if (!firstName) {
    errors.push({ error: "firstName is required!" });
  }
  if (!lastName) {
    errors.push({ error: "lastName is required!" });
  }
  if (!dateOfBirth) {
    errors.push({ error: "dateOfBirth is required!" });
  }
  if (!height) {
    errors.push({ error: "heigth is required!" });
  }
  if (!weight) {
    errors.push({ error: "weigth is required!" });
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
      errors.push({ error: "password should be email" });
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
      errors.push({ error: "password should be email" });
    }
  }
  if (!password) {
    errors.push({ error: "password is required!" });
  }
  return errors
};
