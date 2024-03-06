import { Controller } from '@nestjs/common';
import { AttachmentsService } from '@apis/attachments/attachments.service';

@Controller('attachments')
export class AttachmentsController {
  constructor(private attachmentService: AttachmentsService) {}
}
