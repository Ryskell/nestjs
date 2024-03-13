import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {
  private readonly users = ['User1', 'User2', 'User3'];

  getUsers(): string[] {
    return this.users;
  }
}