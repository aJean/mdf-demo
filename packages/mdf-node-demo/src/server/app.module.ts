import { Global, Module, NestModule } from '@nestjs/common';
import MdfModule from './mdf/mdf.module';

/**
 * @file 启动模块
 */

@Global()
@Module({
  imports: [MdfModule],
})
export default class AppModule implements NestModule {
  configure(): any {}
}
