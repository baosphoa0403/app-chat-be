import { ProfileRepositoy } from './profile.repository';

export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepositoy) {}
}
