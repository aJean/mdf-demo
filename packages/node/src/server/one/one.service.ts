import { Injectable, HttpService, AppService, SharedService } from '@mdfjs/node';

/**
 * @file 一个普通 service 的例子
 */

@Injectable()
export default class OneService extends AppService {
  constructor(protected shared: SharedService) {
    super('one', shared);
  }

  async getData(): Promise<any> {
    const data = await this.send({
      url: 'http://buriedpoint-interface-qa.medlinker.com/v1/buried/point',
    });

    return data
      .toPromise()
      .then((res) => {
        return this.pipeMock(null, 200, '都被你给懂完了');
      })
      .catch((e) => {
        return this.pipeMock(null, 200, '你把服务器给整不会了');
      });
  }
}
