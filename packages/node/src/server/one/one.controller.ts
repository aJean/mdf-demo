import { Controller, Get, Headers, Query } from '@mdfjs/node';
import OneService from './one.service';

/**
 * @file 请求路由
 */

@Controller('/one')
export default class OneController {
  constructor(private server: OneService) {}

  @Get('/data')
  index(@Query() query: any) {
    return this.server.getData();
  }

  @Get('/check')
  check() {
    return this.server.checkData();
  }

  /**
   * headers 自动下发
   */
  @Get('/testHeaders')
  testHeaders(@Headers() header: any) {
    return this.server.getPreviewLadder(39636, header);
  }
}
