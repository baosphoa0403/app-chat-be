import { BaseAbstractRepository } from '@app/common/base/base.repository';
import { NotificationEntity } from './entity/notifications.entity';

export interface NotificationsRepositoryInterface extends BaseAbstractRepository<NotificationEntity> {}
