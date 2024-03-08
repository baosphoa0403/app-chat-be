import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationEntity } from './entity/notifications.entity';
import { NotificationsRepositoyInterface } from './notifications.interface';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationRepository extends BaseAbstractRepostitory<NotificationEntity> implements NotificationsRepositoyInterface {
  constructor(@InjectRepository(NotificationEntity) private readonly notificationRepository: Repository<NotificationEntity>) {
    super(notificationRepository);
  }
}
