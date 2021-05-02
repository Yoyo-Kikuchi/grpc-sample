import {
  Controller,
  Get,
  Query,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { CatDto } from './dto';
import { MyCat } from './entities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'SUCCESS',
    type: MyCat,
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'BAD_REQUEST' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'UNAUTHORIZED' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'INTERNAL_SERVER_ERROR',
  })
  getHello(@Query() queryParams: CatDto): Observable<MyCat> {
    const targetCat = queryParams.target_cat || '';
    try {
      return this.appService.getHello(targetCat);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: '予期せぬエラーが発生しました。',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
