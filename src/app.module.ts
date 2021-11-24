import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
