import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { ApiTags } from '@nestjs/swagger';
import { ConversationDTO } from './dto/conversations.dto';
import { ConversationEntity } from './entity/conversations.entity';
import { DeleteConversationDTO } from './dto/delete.conversations.dto';
import { ConversationPermissionGuard } from './host.guard';
import { UpdateConversationDTO } from './dto/update.conversation.dto';

@Controller('conversations')
@ApiTags('conversations')
export class ConversationsController {
  constructor(private conversationService: ConversationsService) {}

  @Post()
  async createConversation(@Body() createConversation: ConversationDTO): Promise<ConversationEntity> {
    return await this.conversationService.createConversation(createConversation);
  }

  @Get('/search')
  async searchByName(@Query('name') search: string): Promise<ConversationEntity[]> {
    return await this.conversationService.findConversationsByName(search);
  }

  @Get(':userId')
  async findUserByUserId(@Param('userId') userId: string): Promise<ConversationEntity> {
    return await this.conversationService.findUserByUserId(userId);
  }

  @UseGuards(ConversationPermissionGuard)
  @Put()
  async updateConversationName(@Body() data: UpdateConversationDTO) {
    return await this.conversationService.updateConversation(data);
  }

  @Delete()
  @UseGuards(ConversationPermissionGuard)
  async deleteConversation(@Body() data: DeleteConversationDTO): Promise<ConversationEntity> {
    return await this.conversationService.deleteConversation(data);
  }
}
