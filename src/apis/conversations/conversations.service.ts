import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConversationRepository } from './conversations.repository';
import { ConversationDTO } from './dto/conversations.dto';
import { ConversationEntity } from './entity/conversations.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserConversationEntity } from '../user-conversations/entity/user-conversations.entity';
import { DeleteConversationDTO } from './dto/delete.conversations.dto';
import { userConversationsRepository } from '../user-conversations/user-conversations.repository';
import { UserRepository } from '../user/user.repository';
import { UserEntity } from '../user/entity/user.entity';
import { UpdateConversationDTO } from './dto/update.conversation.dto';

@Injectable()
export class ConversationsService {
  constructor(
    private readonly conversationRepository: ConversationRepository,
    @InjectRepository(UserConversationEntity)
    private readonly userConversationRepository: userConversationsRepository,
    @InjectRepository(UserEntity)
    private readonly userRepository: UserRepository
  ) {}
  async createConversation(data: ConversationDTO): Promise<ConversationEntity> {
    const checkUser = await this.userRepository.findOne({ where: { id: data.userId } });
    if (!checkUser) {
      throw new HttpException('Not Found User', HttpStatus.NOT_FOUND);
    }

    const conversation = new ConversationEntity();
    conversation.name = data.name;
    await this.conversationRepository.save(conversation);

    const userConversation = new UserConversationEntity();
    userConversation.userEntity = checkUser;
    userConversation.isHost = true;
    userConversation.conversationID = conversation.id;

    await this.userConversationRepository.save(userConversation);

    conversation.userConversationEntities = [userConversation];

    return conversation;
  }
  async findConversationsByName(search?: string): Promise<ConversationEntity[]> {
    const conversations = await this.conversationRepository.findConversationByName(search);
    return conversations;
  }

  async findUserByUserId(userId: string): Promise<ConversationEntity[]> {
    return await this.conversationRepository.findUserId(userId);
  }
  async updateConversation(data: UpdateConversationDTO) {
    const conversation = await this.conversationRepository.findOne({
      where: { id: data.conversationId },
      relations: ['userConversationEntities']
    });
    if (!conversation) {
      throw new HttpException('not found conversation', HttpStatus.NOT_FOUND);
    }
    const checkUser = await this.userConversationRepository.findOne({
      where: { userId: data.userId, conversationID: data.conversationId }
    });
    if (!checkUser) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    if (conversation.isActive === false) {
      throw new HttpException('This conversation not exist', HttpStatus.NOT_FOUND);
    }
    conversation.name = data.name !== undefined ? data.name : conversation.name;
    conversation.updatedAt = new Date();
    return await this.conversationRepository.save(conversation);
  }

  async deleteConversation(data: DeleteConversationDTO): Promise<ConversationEntity> {
    const conversation = await this.conversationRepository.findOne({
      where: { id: data.conversationId },
      relations: ['userConversationEntities']
    });

    if (!conversation) {
      throw new HttpException('conversationId Not Found', HttpStatus.NOT_FOUND);
    }

    const user = await this.userConversationRepository.findOne({
      where: { userId: data.userId, conversationID: data.conversationId }
    });

    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }

    conversation.isActive = false;
    return await this.conversationRepository.save(conversation);
  }

  async hasConversationPermission(userId: string, conversationId: string): Promise<boolean> {
    const conversations = await this.conversationRepository.findOne({
      where: { id: conversationId },
      relations: ['userConversationEntities']
    });
    const checkUser = await this.userConversationRepository.findOne({
      where: { userId: userId, conversationID: conversationId }
    });
    if (!conversations) {
      throw new HttpException('Not Found conversation', HttpStatus.NOT_FOUND);
    }
    if (checkUser.isHost === false) {
      throw new HttpException('User Unauthorized to update this conversation', HttpStatus.FORBIDDEN);
    }
    return true;
  }
}
