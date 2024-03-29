class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg: string, statusCode: number) => {
  throw new CustomError(msg, statusCode);
};

export { CustomError, createCustomError };
