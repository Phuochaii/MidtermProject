import { IsNotEmpty, Length } from 'class-validator';
export class LoginReqDTO {
  @IsNotEmpty({ message: 'Username cannot be empty!' })
  @Length(4, null, { message: 'Username has 4 characters at least' })
  username: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  @Length(8, null, { message: 'Password has 8 characters at least' })
  password: string;
}
