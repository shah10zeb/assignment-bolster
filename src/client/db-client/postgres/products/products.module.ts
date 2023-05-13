import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductImplementation } from './products.implementation';
import { Product } from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductImplementation],
  exports: [ProductImplementation],
})
export class ProductsImplementationModule {}
