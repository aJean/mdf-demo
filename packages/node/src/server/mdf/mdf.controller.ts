import { Controller, Get, Header, Query } from '@mdfjs/node';
import MdfService from './mdf.service';

/**
 * @file 请求路由
 */

@Controller('/mdf')
export default class MdfController {
  constructor(private readonly mdfService: MdfService) {}

  @Get('/')
  @Header('Content-Type', 'application/json')
  index(@Query() query: any) {
    return this.mdfService.getData();
  }
}
