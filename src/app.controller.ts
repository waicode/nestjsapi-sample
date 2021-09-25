import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Subject } from 'rxjs';
import { AppService } from './app.service';
import { QiitaService } from './qiita/qiita.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly qiitaService: QiitaService,
  ) {}

  @Get()
  getQiitaItem(): any {
    const items = this.qiitaService.getItems();
    return items;
  }
}
