import { Controller } from '@nestjs/common';
import { ProfileService } from '@apis/profile/profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
}
