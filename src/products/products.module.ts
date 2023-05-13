import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsImplementationModule } from 'src/client/db-client/postgres/products/products.module';
import { ProductsController } from './products.controller';
import { UsersImplementationModule } from 'src/client/db-client/postgres/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ProductsImplementationModule, UsersImplementationModule, JwtModule],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
