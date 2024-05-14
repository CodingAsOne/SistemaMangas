import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ChapterEntity } from '../chapter/chapter.entity';

@Entity('mangas')
export class MangaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nameOriginal: string; // Enen no Shouboutai

  @Column()
  nameTranslated: string; // Fire Force

  @Column({ type: 'date' })
  releaseDate: Date;

  @Column({
    type: 'enum',
    enum: ['Hiato', 'Parado', 'Finalizado', 'Em Lançamento'],
  })
  status: string;

  @Column()
  chapterCount: number;

  @Column()
  synopsis: string;

  @Column({
    type: 'enum',
    enum: ['Ação', 'Militar', 'Drama', 'Escolar', 'Mistério', 'Shounen', 'Romance', 'Aventura', 'Sobrenatural', 'Artes Marciais', 'Super Poderes'],
  })
  category: string;

  @Column({
    type: 'enum',
    enum: ['Mangá', 'Manhwa', 'Manhua', 'Webtoon'],
  })
  type: string;

  @Column()
  favorite: boolean;

  @Column({
    type: 'enum',
    enum: ['Acompanhando', 'Parado', 'Finalizado', 'Ver mais tarde']
  })
  situation: string;

  @OneToMany(() => ChapterEntity, chapter => chapter.manga)
  chapters: ChapterEntity[];
}
