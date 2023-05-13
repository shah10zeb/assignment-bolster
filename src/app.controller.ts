import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SeedingService } from './seeding.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly seedService: SeedingService,
  ) {}

  @Post('seed')
  async getHello(): Promise<string> {
    await this.seedService.seed();
    return 'SEEDING DONE';
  }
}
