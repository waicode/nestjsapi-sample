import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { QiitaService } from './qiita/qiita.service';

@Controller()
export class AppController {
  constructor(private readonly qiitaService: QiitaService) {}

  @Get()
  getQiitaItem(): Observable<{ id: string; title: string }[]> {
    return this.qiitaService.getItems();
  }
}
