import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationEntiy } from './entity/notifications.entity';
import { NotificationsRepositoyInterface } from './notifications.interface';
import { Repository } from 'typeorm';


@Injectable()
export class NotificationRepository extends BaseAbstractRepostitory<NotificationEntiy> implements NotificationsRepositoyInterface {
  constructor(@InjectRepository(NotificationEntiy) private readonly notificationRepository: Repository<NotificationEntiy>) {
    super(notificationRepository);
  }
}
