import { Injectable } from '@nestjs/common';
import { Chart } from 'src/client/db-client/postgres/charts/charts.entity';
import { ChartsImplementation } from 'src/client/db-client/postgres/charts/charts.implementation';
import { UserImplementation } from 'src/client/db-client/postgres/users/users.implementation';

@Injectable()
export class ChartsService {
  constructor(
    private chartClient: ChartsImplementation,
    private userClient: UserImplementation,
  ) {}

  async listUsersCharts(username: string): Promise<Chart | any> {
    const userDetails = await this.userClient.getUser(username);
    return this.chartClient.getCharts(userDetails.charts);
  }
}
