import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Chart } from './charts.entity';

@Injectable()
export class ChartsImplementation {
  constructor(
    @InjectRepository(Chart) private readonly repo: Repository<Chart>,
  ) {}

  public async getCharts(chartIds: string[]) {
    return this.repo.find({ where: { chartId: In(chartIds) } });
  }
}
