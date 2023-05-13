import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductImplementation {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>,
  ) {}

  public async getAllProducts() {
    return this.repo.find();
  }

  public async getSpecificProducts(productIds: string[]) {
    return this.repo.find({ where: { productId: In(productIds) } });
  }
}
