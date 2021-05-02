import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CatDto {
  @ApiProperty({ example: 'tama' })
  @IsNotEmpty()
  @IsString()
  readonly target_cat: string;
}
