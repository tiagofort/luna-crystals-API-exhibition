class ErrorHandler extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode || 500;
      this.name = this.constructor.name;
      Error.captureStackTrace(this, this.constructor);
    }
  
    toJson() {
      return {
        status: 'error',
        statusCode: this.statusCode,
        message: this.message
      };
    }
  }
  
  module.exports = ErrorHandler;

