import { Controller, Get, Header, Query } from '@mdfjs/node';
import OneService from './one.service';

/**
 * @file 请求路由
 */

@Controller('/mdf')
export default class OneController {
  constructor(private readonly one: OneService) {}

  @Get('/')
  @Header('Content-Type', 'application/json')
  index(@Query() query: any) {
    return this.one.getData();
  }
}
