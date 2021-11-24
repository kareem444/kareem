import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432,
      // username: 'postgres',
      // password: 'kareem44',
      // database: 'chat_server',
      // entities: [User],
      // synchronize: true,
      type: 'postgres',
      host: 'ec2-34-236-136-215.compute-1.amazonaws.com',
      port: 5432,
      username: 'semubzricsdtgt',
      password: '9c4ecc4c8b9db36b6b6e2dd022d4e62ef0e2864d2446382d51923825cec71dbe',
      database: 'd8ta631hts0u6p',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
