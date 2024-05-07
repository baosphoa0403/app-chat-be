import { BaseInterfaceRepository } from '@app/common/base/base.interface';
import { ConversationEntity } from './entity/conversations.entity';

export interface ConversationsRepositoryInterface extends BaseInterfaceRepository<ConversationEntity> {
  findConversationByName(name: string): Promise<ConversationEntity[] | undefined>;
  findUserId(userId: string): Promise<ConversationEntity[]>;
}
