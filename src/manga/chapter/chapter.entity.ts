import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MangaEntity } from '../models/manga.entity'; 

@Entity()
export class ChapterEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column({ type: 'date' })
  releaseDate: Date;

  @Column()
  read: boolean;

  @ManyToOne(() => MangaEntity, manga => manga.chapters) // Relacionamento com o manga
  @JoinColumn({ name: 'manga_id' })
  manga: MangaEntity;
}