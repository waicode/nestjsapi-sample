import {
  BadRequestException,
  Controller,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { QiitaService } from './qiita.service';

@Controller('qiita')
export class QiitaController {
  constructor(private readonly qiitaService: QiitaService) {}

  @Get('/items')
  getQiitaItem(@Query('count', ParseIntPipe) count) {
    if (count > 10 || count < 1) {
      throw new BadRequestException();
    }
    return this.qiitaService.getItems(count);
  }
}
