export class AppError extends Error {
  status: string;
  statusCode: number;
  type: string;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.type = "ApplicationError";
    this.statusCode = statusCode || 500;
    this.status = this.statusCode < 500 ? "error" : "fail";

    // To secure type when do `instanceof`
    Object.setPrototypeOf(this, AppError.prototype);

    Error.captureStackTrace(this, this.constructor);
  }
}
