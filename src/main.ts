import { config } from 'dotenv';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

config();

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3333;

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4000,
    },
  });

  await app.startAllMicroservicesAsync();

  await app.listen(PORT, () =>
    Logger.log(`Application-Auth running on port ${PORT}`),
  );

  Logger.log('Auth microservice running');
}

bootstrap();
