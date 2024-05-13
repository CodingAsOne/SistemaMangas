import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteService } from './favorite/favorite.service';
import { FavoriteController } from './favorite/favorite.controller';
import { FavoriteModule } from './favorite/favorite.module';
import { MangaController } from './manga/manga.controller';
import { MangaService } from './manga/manga.service';
import { MangaModule } from './manga/manga.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sistema_manga',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FavoriteModule,
    MangaModule,
    
  ],
  controllers: [AppController, FavoriteController, MangaController],
  providers: [AppService, FavoriteService, MangaService]
})
export class AppModule {}