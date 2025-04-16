import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET not set in environment variables");
  }

  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // You can customize token duration here
  });
};

export default generateToken;
