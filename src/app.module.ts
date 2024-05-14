import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MangaModule } from './manga/manga.module';
import { MangaEntity } from './manga/models/manga.entity';
import { ChapterEntity } from './manga/chapter/chapter.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'sistema_manga',
      autoLoadEntities: true,
      synchronize: true,
      entities: [MangaEntity, ChapterEntity,]
    }),
    AuthModule,
    MangaModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }