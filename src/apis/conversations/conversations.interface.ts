import { BaseInterfaceRepository } from '@app/common/base/base.interface';
import { ConversationEntity } from './entity/conversations.entity';

export interface ConversationsRepositoryInterface extends BaseInterfaceRepository<ConversationEntity> {}
