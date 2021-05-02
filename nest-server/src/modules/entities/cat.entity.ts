import { ApiProperty } from '@nestjs/swagger';

export class MyCat {
  @ApiProperty({ example: 'tama' })
  name: string;

  @ApiProperty({ example: 'mainecoon' })
  kind: string;
}
