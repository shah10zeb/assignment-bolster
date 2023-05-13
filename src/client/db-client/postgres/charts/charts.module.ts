import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartsImplementation } from './charts.implementation';
import { Chart } from './charts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chart])],
  providers: [ChartsImplementation],
  exports: [ChartsImplementation],
})
export class ChartsImplementationModule {}
