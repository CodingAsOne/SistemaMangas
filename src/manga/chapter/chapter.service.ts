import { Injectable } from '@nestjs/common';
import { ChapterEntity } from './chapter.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(ChapterEntity)
    private readonly chapterRepository: Repository<ChapterEntity>,
  ) {}

  // CRUD nos episódios
}
