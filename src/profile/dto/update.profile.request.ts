import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateProfileRequest {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  login?: string;
  @IsOptional()
  @IsStrongPassword({ minLength: 8, minUppercase: 1, minNumbers: 1 })
  password?: string;
  @IsString()
  @IsOptional()
  description?: string;
}
