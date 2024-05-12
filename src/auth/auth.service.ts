import { Injectable } from '@nestjs/common';
import { User } from './models/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) { }

    async findOneBy(condition): Promise<User> {
        return this.userRepository.findOneBy(condition);
    }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async update(id: number, data): Promise<any> {
        return await this.userRepository.update(id, data);
    }
}
