import { ProfileStatus } from '../types';
import { Expose } from 'class-transformer';

export class ProfileResponseDto {
  @Expose()
  login: string;
  @Expose()
  name: string;
  @Expose()
  description: string;
  @Expose()
  createdDate: Date;
  @Expose()
  status: ProfileStatus;
}
