import { Module } from '@nestjs/common';
import { DbClientModule } from './db-client/db-client.module';

@Module({
  imports: [DbClientModule],
  exports: [DbClientModule],
})
export class ClientModule {}
