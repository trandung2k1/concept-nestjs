import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Controller('users')
export class UsersController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  getUsers() {
    return this.catService.getCats();
  }
}
