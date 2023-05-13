import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ChartsModule } from './charts/charts.module';
import { ProductsModule } from './products/products.module';
import { ClientModule } from './client/client.module';
import { ConfigModule } from '@nestjs/config';
import { SeedingService } from './seeding.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ChartsModule,
    ProductsModule,
    ClientModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, SeedingService],
})
export class AppModule {}
