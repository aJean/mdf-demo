import { Injectable, AppService } from '@mdfjs/node';

/**
 * @file 一个普通 service 的例子
 */

@Injectable()
export default class OneService extends AppService {
  constructor() {
    super('one');
  }

  /**
   * 正常网络请求
   */
  getData(): any {
    return this.send({
      url: ' http://8.131.68.38:9102/v1/api/cm/question/explains/unique/get?id=18083',
    });
  }

  getPreviewLadder(id: number, headers: any): any {
    return this.rpc({
      path: `http://8.131.68.38:9102/v1/api/cm/question/explain?id=${id}`,
      headers,
    });
  }

  /**
   * 延时 1s 执行
   */
  checkData(): any {
    const res = this.pipeMock({ data: '假的吧' });

    return new Promise(function (resolve) {
      setTimeout(() => resolve(res), 1000);
    });
  }

  /**
   * 测试设备信息
   */
  sendDevice(headers: string): any {
    headers.taltoken = 'tal173ioVa4mu6y2qjWFsYqZMbR8528oe8aQDKcZ5Y4TZDAH945lb7zqSnOFISTs59D7NfRYtOT4Ggmk0HwM49LUeeTxJAT91dwyvZsftnjYqLbi29r8oXgeZ7OlLKTPxwLU03_9R3DKnu3qMC7mmVGv13sWwtWhg6FKz-4rolb4YSCdMf8DHaIo3iol0qmpcpe2wtFMw';

    const a = 1;
    a= 2;
    return this.rpc({
      path: `http://8.131.68.38:9043/v1/api/task/getTaskList`,
      headers,
    });
  }
}