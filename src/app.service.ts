import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "WELCOME TO THE WEBSITE THAT IS HOSTED IN YOUR LAUNDRY ROOM!";
  }
}
