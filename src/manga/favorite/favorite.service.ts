import { Injectable } from '@nestjs/common';
import { ChapterService } from '../chapter/chapter.service';
import { MangaService } from '../manga.service';

@Injectable()
export class FavoriteService {
    constructor(
        private readonly chapterService: ChapterService,
        private readonly mangaService: MangaService
    ){}

}
