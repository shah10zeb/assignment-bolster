import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from './client/db-client/postgres/users/users.entity';

import * as seedData from '../sampleData.json';
import { Product } from './client/db-client/postgres/products/products.entity';
import { Chart } from './client/db-client/postgres/charts/charts.entity';
import { encodePassword } from './utils/utils';
const { users, products, analytics } = { ...seedData };
@Injectable()
export class SeedingService {
  constructor(private readonly entityManager: EntityManager) {}

  async seed(): Promise<void> {
    const hashedPasswordUsers = [];
    for (const user of users) {
      const tempUser = {
        ...user,
        password: await encodePassword(user.password),
      };
      hashedPasswordUsers.push(tempUser);
    }
    await Promise.all([
      this.entityManager.save(User, hashedPasswordUsers),
      this.entityManager.save(Product, products),
      this.entityManager.save(Chart, analytics),
    ]);
  }
}
