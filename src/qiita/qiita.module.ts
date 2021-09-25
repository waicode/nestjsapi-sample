import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { QiitaService } from './qiita.service';
import { QiitaController } from './qiita.controller';

@Module({
  imports: [HttpModule],
  controllers: [QiitaController],
  providers: [QiitaService],
})
export class QiitaModule {}
