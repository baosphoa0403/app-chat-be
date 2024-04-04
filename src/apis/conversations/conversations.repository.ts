import { BaseAbstractRepository } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { ConversationEntity } from './entity/conversations.entity';
import { ConversationsRepositoryInterface } from './conversations.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class ConversationRepository
  extends BaseAbstractRepository<ConversationEntity>
  implements ConversationsRepositoryInterface
{
  constructor(
    @InjectRepository(ConversationEntity)
    private readonly ConversationRepository: Repository<ConversationEntity>
  ) {
    super(ConversationRepository);
  }

  generalQueryBuilder(): SelectQueryBuilder<ConversationEntity> {
    return this.ConversationRepository.createQueryBuilder('conversations');
  }

  async findConversationByName(name: string): Promise<ConversationEntity[]> {
    const query = this.generalQueryBuilder();
    if (name) {
      query
        .where('conversations.name LIKE :name', { name: `%${name}%` })
        .andWhere('conversations.isActive IN (true, false)', { isActive: [true, false] });
    }

    return query.getMany();
  }

  async findUserId(userId: string): Promise<ConversationEntity> {
    const query = await this.generalQueryBuilder();
    query
      .leftJoinAndSelect('conversations.userConversationEntities', 'userConversationEntity')
      .leftJoinAndSelect('userConversationEntity.userEntity', 'userEntity')
      .where('userEntity.id = :userId', { userId });
    return await query.getOne();
  }
}
