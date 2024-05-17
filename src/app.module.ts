import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
