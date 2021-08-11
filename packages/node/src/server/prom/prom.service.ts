import { register } from 'prom-client';
import { Injectable, AppService, SharedService } from '@mdfjs/node';

/**
 * @file prom service
 */

@Injectable()
export default class PromService extends AppService {
  constructor(protected shared: SharedService) {
    super('prom', shared);
  }

  /**
   * 输出监控数据
   */
  sendMetrics() {
    return register.metrics().then((res) => this.pipeProm(res));
  }
}
