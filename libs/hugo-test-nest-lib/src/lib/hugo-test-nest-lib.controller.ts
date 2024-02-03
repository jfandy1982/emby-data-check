import { Controller } from '@nestjs/common';
import { HugoTestNestLibService } from './hugo-test-nest-lib.service';

@Controller('hugo-test-nest-lib')
export class HugoTestNestLibController {
  constructor(private hugoTestNestLibService: HugoTestNestLibService) {}
}
