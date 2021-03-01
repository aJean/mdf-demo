import { Module, HttpModule } from '@nestjs/common';
import MdfController from './mdf.controller';
import MdfService from './mdf.service';

/**
 * @file mdf module
 */

@Module({
  imports: [HttpModule],
  controllers: [MdfController],
  providers: [MdfService],
})
export default class MdfModule {}
