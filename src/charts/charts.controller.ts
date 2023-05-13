import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ChartsService } from './charts.service';

@Controller()
export class ChartsController {
  constructor(private chartService: ChartsService) {}

  @UseGuards(AuthGuard)
  @Get('analytics')
  getUsersProducts(@Request() req) {
    return this.chartService.listUsersCharts(req.user.username);
  }
}
