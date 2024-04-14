import { BaseInterfaceRepository } from '@app/common/base/base.interface';
import { UserConversationEntity } from '@apis/user-conversations/entity/user-conversations.entity';

export interface UserConversationsRepositoryInterface extends BaseInterfaceRepository<UserConversationEntity> {}
