import { Controller, Get } from '@nestjs/common';
import { QiitaService } from './qiita/qiita.service';

@Controller()
export class AppController {
  constructor(private readonly qiitaService: QiitaService) {}

  @Get()
  getQiitaItem(): any {
    const items = this.qiitaService.getItems();
    return items;
  }
}
