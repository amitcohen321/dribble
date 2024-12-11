import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GamesModule } from './modules/games/games.module';

@Module({
  imports: [GamesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
