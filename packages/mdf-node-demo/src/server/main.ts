import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';

/**
 * @file 启动 server，这个文件应该由框架生成，因为还要处理信号量
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  await app.listen(3001);
}

bootstrap();