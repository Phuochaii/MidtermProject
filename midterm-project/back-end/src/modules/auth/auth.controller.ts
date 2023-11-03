import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginReqDTO } from './dto/request/LoginReq';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async handleLogin(@Body() loginReqDto: LoginReqDTO) {
    this.authService.login;

    return 'Login successfully!';
  }
}
