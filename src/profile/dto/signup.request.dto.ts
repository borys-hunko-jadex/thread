import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Matches,
} from 'class-validator';
import { LOGIN } from '../../commons/consts/regex';
import { ERRORS } from '../../commons/consts';

export class SignupRequestDto {
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @Matches(LOGIN, { message: ERRORS.INVALID_LOGIN_FORMAT })
  login: string;
  @IsStrongPassword({ minLength: 8, minUppercase: 1, minNumbers: 1 })
  password: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  description: string | null;
}
