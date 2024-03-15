import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from '@apis/auth/auth.service';
import { LoginDto } from '@apis/auth/dto/login.dto';
import { Public } from '@apis/auth/contants';
import { Response } from 'express';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { SignUpDTO } from '@apis/user/dto/user.dto';

@Controller('auth')
@ApiCookieAuth()
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: LoginDto, @Res({ passthrough: true }) response: Response) {
    const { access_token } = await this.authService.login(body);
    response
      .cookie('access_token', access_token, {
        httpOnly: false, //cross-site scripting (XSS) attacks
        secure: false, //sent over HTTPS connections
        sameSite: 'lax',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .send({ status: 'ok' });
  }

  @Public()
  @Post('sign-up')
  async signUp(@Body() body: SignUpDTO) {
    return this.authService.signUp(body);
  }
  @Public()
  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.cookie('access_token', '').send({ message: 'logout success' });
  }
}
