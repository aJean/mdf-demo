import { Counter } from 'prom-client';
import { Controller, Get, Header, Query } from '@mdfjs/node';
import OneService from './one.service';

/**
 * @file 请求路由
 */

const counter = new Counter({
  name: 'test',
  help: 'Example of a counter',
  labelNames: ['code'],
});

@Controller('/one')
export default class OneController {
  constructor(private readonly one: OneService) {}

  @Get('/')
  index(@Query() query: any) {
    counter.inc({ code: 200 });
    return this.one.getData();
  }
}
