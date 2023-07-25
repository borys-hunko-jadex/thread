import { SignupRequestDto } from '../dto/signup.request.dto';
import { ProfileResponseDto } from '../dto/profile.response.dto';
import { UpdateProfileRequest } from '../dto/update.profile.request';

export default interface IProfileService {
  create: (createUserReq: SignupRequestDto) => Promise<ProfileResponseDto>;
  findByLoginOrEmail: (loginOrEmail: string) => Promise<ProfileResponseDto>;
  findByLogin: (login: string) => Promise<ProfileResponseDto>;
  update: (id: number, updateRequest: UpdateProfileRequest) => Promise<void>;
}

export const PROFILE_SERVICE = Symbol('PROFILE_SERVICE');
