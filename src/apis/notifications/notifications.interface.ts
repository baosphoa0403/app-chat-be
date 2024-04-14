import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { NotificationEntity } from './entity/notifications.entity';

export interface NotificationsRepositoyInterface
  extends BaseAbstractRepostitory<NotificationEntity> {}
