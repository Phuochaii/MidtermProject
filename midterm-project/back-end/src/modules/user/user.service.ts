import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { IUser } from './user.interface';
import { AccountService } from '../account/account.service';
import { UserRespDTO } from './dto/response/UserResp';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private accountService: AccountService,
  ) {}

  async createUser(user: IUser) {
    return this.userRepository.save(user);
  }

  async findUserByAccount(username: string) {
    const matchedAccount = await this.accountService.findAccountByUsername(
      username,
    );

    if (!matchedAccount) {
      throw new NotFoundException('Account not found');
    }

    const matchedUser = await this.userRepository.findOne({
      where: {
        account: matchedAccount,
      },
    });

    if (!matchedAccount) {
      throw new NotFoundException('User not found');
    }

    return matchedUser;
  }

  async getMe(username: string): Promise<UserRespDTO> {
    const me = await this.findUserByAccount(username);

    const meResp: UserRespDTO = {
      email: me.email,
      fullname: me.fullname,
    };

    return meResp;
  }
}
