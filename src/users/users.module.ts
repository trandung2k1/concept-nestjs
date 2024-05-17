import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CatsService } from 'src/cats/cats.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CatsService],
})
export class UsersModule {}
