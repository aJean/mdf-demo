import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';

/**
 * @file 启动 server，这个文件应该由框架生成
 * @todo 待处理：中间件、工具库、监控等
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  await app.listen(3001);
}

bootstrap();