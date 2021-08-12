import { Injectable, NestMiddleware } from '@mdfjs/node';
import { Counter, Histogram } from 'prom-client';

/**
 * @file promethus 中间件，需要与 http 拦截器整合
 */

@Injectable()
class PromMiddleware implements NestMiddleware {
  counter: Counter<any>;
  histogram: Histogram<any>;

  constructor() {
    this.counter = new Counter({
      name: 'http_request_count',
      help: 'Example of a counter',
      labelNames: ['code'],
    });

    this.histogram = new Histogram({
      name: `http_request_duration_ms`,
      help: 'Duration of HTTP requests in ms',
      labelNames: ['path', 'method'],
      buckets: [50, 100, 250, 500, 1000, 2000, 3000], // buckets 单位 ms
    });
  }

  use(req: any, res: any, next: Function) {
    if (/prom/.test(req.baseUrl)) {
      next();
    } else if (/favicon\.ico/.test(req.baseUrl)) {
      res.sendStatus(206);
    } else {
      // pv
      this.counter.inc({ code: 200 });

      // rt
      const start = process.hrtime();
      res.once('close', () => {
        const dur = hrtime2ms(process.hrtime(start));
        const labels = { path: req.path, method: req.method };
  
        this.histogram.observe(labels, dur);
      })
      next();
    }
  }
}

// ns - ms
const hrtime2ms = (hrtime: any) => (hrtime[0] * 1e9 + hrtime[1]) / 1000000;

export default {
  apply: PromMiddleware,
  path: '*',
};
