import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CONSTANTS } from './utils/constnats';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  app.setGlobalPrefix(CONSTANTS.API_PREFIX);

  await app.listen(parseInt(configService.get('SERVICE_PORT')));
}
bootstrap();
