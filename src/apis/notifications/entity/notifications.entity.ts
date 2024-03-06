import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'notification' })
export class NotificationEntiy extends BaseEntity {
  @Column()
  content: string;
}
