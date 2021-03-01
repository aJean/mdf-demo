import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export default class MdfService {
  constructor(private readonly httpService: HttpService) {}

  async getData(): Promise<any> {
    const data = await this.httpService.get(
      'http://buriedpoint-interface-qa.medlinker.com/v1/buried/point',
    );

    return data
      .toPromise()
      .then((res) => {
        return { code: 0, message: '完事了哇' };
      })
      .catch((e) => {
        return { code: -1, message: '出错了哇' };
      });
  }
}
