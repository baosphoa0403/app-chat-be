import { BaseAbstractRepostitory } from '@app/common/base/base.repository';
import { Injectable } from '@nestjs/common';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'message' })
export class MessageEntity extends BaseEntity {
  @Column()
  content: string;
}
