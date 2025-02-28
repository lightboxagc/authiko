import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthikoService {
  getHello(): void {
    console.log('Hello World!');
  }
}
