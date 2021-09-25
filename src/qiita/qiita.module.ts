import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QiitaService } from './qiita.service';

@Module({
  imports: [HttpModule],
  providers: [QiitaService],
  exports: [QiitaService],
})
export class QiitaModule {}
