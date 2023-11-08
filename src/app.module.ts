import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppleModule,  } from './apple/apple.module';
import { AppleController } from './apple/apple.controller';


@Module({
  imports: [AppleModule],
  controllers: [AppController, AppleController],
  providers: [AppService],

})
export class AppModule {

}
