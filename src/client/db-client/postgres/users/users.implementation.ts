import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UserImplementation {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  public async getUser(username: string) {
    return this.repo.findOneBy({ username: username });
  }
}
