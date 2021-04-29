import { Module } from '@nestjs/common';
import * as Modules from 'src/modules';

@Module({
  imports: Object.values(Modules),
  controllers: [],
  providers: [],
})
export class MainModule {}
