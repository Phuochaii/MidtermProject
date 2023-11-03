import { Injectable } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';
import { LoginReqDTO } from './dto/request/LoginReq';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async login(loginReqDto: LoginReqDTO) {}
}
