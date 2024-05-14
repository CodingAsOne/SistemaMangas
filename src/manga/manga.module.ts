import { Module } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaController } from './manga.controller';
import { MangaEntity } from './models/manga.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteService } from './favorite/favorite.service';
import { ChapterService } from './chapter/chapter.service';
import { ChapterEntity } from './chapter/chapter.entity';
import { ChapterController } from './chapter/chapter.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([MangaEntity]),
    TypeOrmModule.forFeature([ChapterEntity]),
  ],
  controllers: [MangaController, ChapterController],
  providers: [MangaService, ChapterService, FavoriteService],
  exports: [MangaService]
})
export class MangaModule { }
