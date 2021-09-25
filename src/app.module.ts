import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QiitaModule } from './qiita/qiita.module';

@Module({
  imports: [QiitaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
