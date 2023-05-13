import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersImplementationModule } from 'src/client/db-client/postgres/users/users.module';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [UsersImplementationModule, JwtModule],
})
export class UsersModule {}
