import { Controller, Get, Header, Query } from '@mdfjs/node';
import PromService from './prom.service';

/**
 * @file 请求路由
 */

@Controller('/prom')
export default class PromController {
  constructor(private readonly service: PromService) {}

  /**
   * http exporter
   */
  @Get('/metrics')
  metrics(@Query() query: any) {
    return this.service.sendMetrics();
  }
}
