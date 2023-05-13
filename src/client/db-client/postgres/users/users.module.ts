import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserImplementation } from './users.implementation';
import { User } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserImplementation],
  exports: [UserImplementation],
})
export class UsersImplementationModule {}
