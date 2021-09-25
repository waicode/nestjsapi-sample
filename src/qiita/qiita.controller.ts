import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { QiitaService } from './qiita.service';

@Controller('qiita')
export class QiitaController {
  constructor(private readonly qiitaService: QiitaService) {}

  @Get('/items')
  getQiitaItem(
    @Query('count', ParseIntPipe) count,
  ): Observable<{ title: string; created_at: string }[]> {
    console.log('count', count);
    return this.qiitaService.getItems(count);
  }
}
