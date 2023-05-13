import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartsImplementationModule } from './charts/charts.module';
import { ProductsImplementationModule } from './products/products.module';
import { UsersImplementationModule } from './users/users.module';
import { dataSourceOptions } from 'datasource';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => dataSourceOptions,
    }),
    ChartsImplementationModule,
    ProductsImplementationModule,
    UsersImplementationModule,
  ],
  controllers: [],
  providers: [],
  exports: [
    ChartsImplementationModule,
    ProductsImplementationModule,
    UsersImplementationModule,
  ],
})
export class PostgresModule {}
