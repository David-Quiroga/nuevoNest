import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppleModule,  } from './apple/apple.module';
import { AppleController } from './apple/apple.controller';
import { MateriasModule } from './materias/materias.module';


@Module({
  imports: [AppleModule, MateriasModule],
  controllers: [AppController, AppleController],
  providers: [AppService],

})
export class AppModule {

}
