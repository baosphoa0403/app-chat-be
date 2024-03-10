import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UserService } from '@apis/user/user.service';
import { LoginDto } from '@apis/auth/dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RoleService } from '@apis/role/role.service';
import { SignUpDTO } from '@apis/user/dto/user.dto';
import { ERole } from '@app/common/enum/role';
import { Payload } from '@apis/auth/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
    private roleService: RoleService,
  ) {}

  async login(dto: LoginDto) {
    const { username, password } = dto;

    const user = await this.userService.findUserByName(username);

    if (!user) {
      throw new HttpException('Account invalid', HttpStatus.BAD_REQUEST);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const payload: Payload = {
        id: user.id,
      };
      return { access_token: this.jwtService.sign(payload) };
    }
    throw new BadRequestException('login fail');
  }

  async signUp(dto: SignUpDTO) {
    const { username, password } = dto;
    const role = await this.roleService.findRoleByName(ERole.USER);
    const user = await this.userService.findUserByName(username);

    if (user) {
      throw new BadRequestException('Account already exists');
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const userData = { username, password: hashPassword };
    return await this.userService.create(userData, role);
  }
}
