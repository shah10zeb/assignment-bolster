import { Module } from '@nestjs/common';
import { ChartsImplementationModule } from 'src/client/db-client/postgres/charts/charts.module';
import { UsersImplementationModule } from 'src/client/db-client/postgres/users/users.module';
import { ChartsService } from './charts.service';
import { ChartsController } from './charts.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ChartsImplementationModule, UsersImplementationModule, JwtModule],
  providers: [ChartsService],
  controllers: [ChartsController],
})
export class ChartsModule {}
