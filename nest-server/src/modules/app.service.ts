import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { MyCat } from './entities';

interface CatService {
  getMyCat(data: { target_cat: string }): Observable<MyCat>;
}

@Injectable()
export class AppService implements OnModuleInit {
  private catService: CatService;
  constructor(@Inject('CAT_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.catService = this.client.getService<CatService>('Cat');
  }

  getHello(targetCat: string): Observable<MyCat> {
    try {
      return this.catService.getMyCat({ target_cat: targetCat });
    } catch (e) {
      throw new Error(e);
    }
  }
}
