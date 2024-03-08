import { ProfileRepository } from '@apis/profile/profile.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}
}
