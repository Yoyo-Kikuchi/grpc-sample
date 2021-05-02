import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CAT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: process.env.GRPC_HOST + ':' + process.env.GRPC_PORT,
          package: 'cat',
          protoPath: join(__dirname, '../protos/cat.proto'),
          loader: {
            keepCase: true,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
