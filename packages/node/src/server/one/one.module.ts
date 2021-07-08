import { Module, HttpModule } from '@mdfjs/node';
import OneController from './one.controller';
import OneService from './one.service';

/**
 * @file mdf module
 */

@Module({
  imports: [HttpModule],
  controllers: [OneController],
  providers: [OneService],
})
export default class OneModule {}
