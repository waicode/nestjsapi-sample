import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QiitaController } from './qiita.controller';
import { QiitaService } from './qiita.service';

@Module({
  imports: [HttpModule],
  controllers: [QiitaController],
  providers: [QiitaService],
  exports: [QiitaService],
})
export class QiitaModule {}
