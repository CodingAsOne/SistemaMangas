import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MangaEntity } from './models/manga.entity';
import { Repository } from 'typeorm';
import { Manga } from './models/manga.interface';

@Injectable()
export class MangaService {
    constructor(
        @InjectRepository(MangaEntity) private readonly mangaRepository: Repository<MangaEntity>
    ) { }

    async findOneBy(name: string): Promise<Manga> {
        const manga = this.mangaRepository.findOneBy({ nameOriginal: name });

        if (!manga)
            return this.mangaRepository.findOneBy({ nameTranslated: name });

        return manga;
    }

}