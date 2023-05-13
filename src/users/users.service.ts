import { Injectable } from '@nestjs/common';
import { UserImplementation } from 'src/client/db-client/postgres/users/users.implementation';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(private userRepo: UserImplementation) {}

  async findOne(
    username: string,
    passwordReuired = false,
  ): Promise<User | undefined> {
    const user = await this.userRepo.getUser(username);
    if (!passwordReuired) delete user.password;
    return user;
  }
}
