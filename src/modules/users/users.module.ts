import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersMiddleware],
})
export class UsersModule {}