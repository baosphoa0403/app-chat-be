import { MigrationInterface, QueryRunner } from 'typeorm';
import * as faker from 'faker';
import * as bcrypt from 'bcrypt';

export class Seed1715062442372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columnToAdd = 5;
    // insert roles table
    await queryRunner.query(`INSERT INTO dev.roles (id, "name")
        VALUES ('dd8cf786-9620-4bae-926b-6aee06173acc', 'ADMIN')`);
    await queryRunner.query(`INSERT INTO dev.roles (id, "name")
        VALUES ('11bb4451-17db-4f33-921c-1b05800a49b6', 'USER')`);

    // insert user conversation table map user_conversation and user table
    for (let i = 0; i < columnToAdd; i++) {
      // Generate user data
      const userId = faker.random.uuid();
      const username = faker.internet.userName();
      const password = '123456';
      const hashedPassword = await bcrypt.hash(password, 10);
      const roleId = '11bb4451-17db-4f33-921c-1b05800a49b6';

      await queryRunner.query(`INSERT INTO dev.users (id, "isActive", "username", "password", "role_id")
        VALUES ('${userId}', true, '${username}', '${hashedPassword}', '${roleId}')`);

      for (let i = 0; i < columnToAdd; i++) {
        // Generate conversation data
        const conversationId = faker.random.uuid();
        const isActive = true;
        const name = faker.lorem.word();

        await queryRunner.query(`INSERT INTO dev.conversations (id, "isActive", "name")
            VALUES ('${conversationId}', ${isActive}, '${name}')`);

        // Insert user_conversation data
        const isHost = faker.random.boolean();
        await queryRunner.query(`INSERT INTO dev.user_conversation (user_id, conversation_id, "isHost")
         VALUES ('${userId}', '${conversationId}', ${isHost})`);
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM dev.user_conversation`);
    await queryRunner.query(`DELETE FROM dev.conversations`);
    await queryRunner.query(`DELETE FROM dev.users`);
    await queryRunner.query(`DELETE FROM dev.roles`);
  }
}
