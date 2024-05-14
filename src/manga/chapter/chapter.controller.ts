import { Controller } from '@nestjs/common';
import { ChapterService } from './chapter.service';

@Controller('manga\chapter')
export class ChapterController {
    constructor(
        private readonly chapterService: ChapterService
    ) {}
}
