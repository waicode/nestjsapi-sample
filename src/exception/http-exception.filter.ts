import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    if (status >= 400 && status < 500) {
      response.status(status).json({
        message: 'リクエストエラー',
      });
    }
    if (status >= 500) {
      response.status(status).json({
        message: 'システムエラー',
      });
    }
  }
}
