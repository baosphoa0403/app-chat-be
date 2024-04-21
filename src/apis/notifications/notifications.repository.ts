import { BaseAbstractRepository } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationEntity } from './entity/notifications.entity';
import { NotificationsRepositoryInterface } from './notifications.interface';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationRepository
  extends BaseAbstractRepository<NotificationEntity>
  implements NotificationsRepositoryInterface
{
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationRepository: Repository<NotificationEntity>
  ) {
    super(notificationRepository);
  }
}
