import { Module } from '@mdfjs/node';
import PromController from './prom.controller';
import PromService from './prom.service';

/**
 * @file promethus module 这个要被抽象到中间件中，自动处理请求个数和响应时间
 */

@Module({
  controllers: [PromController],
  providers: [PromService],
})
export default class PromModule {}