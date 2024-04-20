import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! gia bao 121 test cicd mới nè đúc hiếu gà';
  }
}
