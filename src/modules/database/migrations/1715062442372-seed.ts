import { MigrationInterface, QueryRunner } from 'typeorm';
import { RoleEntity } from '@apis/role/entity/role.entity';
import { ERole } from '@app/common/enum/role';
import { InsertResult } from 'typeorm/query-builder/result/InsertResult';
import { UserEntity } from '@apis/user/entity/user.entity';
import * as bcrypt from 'bcrypt';
import * as faker from 'faker';
import { ConversationEntity } from '@app/apis/conversations/entity/conversations.entity';
import { UserConversationEntity } from '@app/apis/user-conversations/entity/user-conversations.entity';
import { MessageEntity } from '@app/apis/messages/entity/messages.entity';

export class Seed1715062442372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // insert roles table
    const data = [{ name: ERole.ADMIN }, { name: ERole.USER }];
    const roles: Promise<InsertResult>[] = [];
    for (const roleItem of data) {
      roles.push(queryRunner.manager.insert(RoleEntity, { name: roleItem.name }));
    }
    // // handle array promise
    const dataRole = await Promise.all(roles);
    // console.log(dataRole[0]);
    const idAdmin = dataRole[0].raw[0].id;
    const idUser = dataRole[1].raw[0].id;

    // insert users table
    const users: Promise<InsertResult>[] = [];
    const password = '123456';
    const hashPassword = await bcrypt.hash(password, 10);
    for (let i = 0; i < 5; i++) {
      users.push(
        queryRunner.manager.insert(UserEntity, {
          username: faker.internet.userName(),
          password: hashPassword,
          roleId: i == 4 ? idAdmin : idUser
        })
      );
    }

    // // handle array promise
    const dataUser = await Promise.all(users);
    const userIds = dataUser.map((result) => result.raw[0].id);
    console.log(userIds);

    // insert conversations table
    const conversations: Promise<InsertResult>[] = [];
    conversations.push(
      queryRunner.manager.insert(ConversationEntity, {
        name: faker.lorem.word()
      })
    );

    const conversationData = await Promise.all(conversations);
    const conversationIds = conversationData.map((result) => result.raw[0].id);
    console.log(conversationIds);

    // insert user_conversation table
    const userConversations: Promise<InsertResult>[] = [];
    for (let i = 0; i < userIds.length; i++) {
      for (let j = 0; j < conversationIds.length; j++) {
        userConversations.push(
          queryRunner.manager.insert(UserConversationEntity, {
            userId: userIds[i],
            conversationID: conversationIds[j],
            isHost: faker.datatype.boolean()
          })
        );
      }
    }
    await Promise.all(userConversations);

    // insert message table
    const messages: Promise<InsertResult>[] = [];
    for (let i = 0; i < userIds.length; i++) {
      for (let j = 0; j < conversationIds.length; j++) {
        messages.push(
          queryRunner.manager.insert(MessageEntity, {
            userId: userIds[i],
            conversationId: conversationIds[j],
            content: faker.lorem.sentence()
          })
        );
      }
    }
    await Promise.all(messages);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM dev.user_conversation`);
    await queryRunner.query(`DELETE FROM dev.messages`);
    await queryRunner.query(`DELETE FROM dev.conversations`);
    await queryRunner.query(`DELETE FROM dev.users`);
    await queryRunner.query(`DELETE FROM dev.roles`);
  }
}
