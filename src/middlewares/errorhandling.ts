import { Request, Response, NextFunction } from "express";

// Define a custom error class for structured error messages
class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Maintain proper stack trace (only in development mode)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Middleware to handle custom errors
const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Default to 500 if no status code is provided
  const statusCode = err instanceof AppError ? err.statusCode : 500;

  const response = {
    success: false,
    message: err.message || "An unexpected error occurred.",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  };

  res.status(statusCode).json(response);
};

export { AppError, errorHandler };
