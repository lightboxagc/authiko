import { Module } from '@nestjs/common';
import { AuthikoService } from './authiko.service';

@Module({
  providers: [AuthikoService],
  exports: [AuthikoService],
})
export class AuthikoModule {}
