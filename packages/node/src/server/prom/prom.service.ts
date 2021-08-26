import { register } from 'prom-client';
import { Injectable, AppService } from '@mdfjs/node';

/**
 * @file prom service
 */

@Injectable()
export default class PromService extends AppService {
  constructor() {
    super('prom');
  }

  /**
   * 输出监控数据
   */
  sendMetrics() {
    return register.metrics().then((res) => this.pipeProm(res));
  }
}
