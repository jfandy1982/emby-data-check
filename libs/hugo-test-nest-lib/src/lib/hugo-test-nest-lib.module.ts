import { Module } from '@nestjs/common';
import { HugoTestNestLibController } from './hugo-test-nest-lib.controller';
import { HugoTestNestLibService } from './hugo-test-nest-lib.service';

@Module({
  controllers: [HugoTestNestLibController],
  providers: [HugoTestNestLibService],
  exports: [HugoTestNestLibService],
})
export class HugoTestNestLibModule {}
