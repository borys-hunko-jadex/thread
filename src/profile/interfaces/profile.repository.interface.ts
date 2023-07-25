import { ProfileEntity } from '../profile.entity';
import { SignupRequestDto } from '../dto/signup.request.dto';

export default interface IProfileRepository {
  findById(id: number): Promise<ProfileEntity>;

  findByLogin(login: string): Promise<ProfileEntity>;

  findByLoginOrEmail(loginOrEmail: string): Promise<ProfileEntity>;

  create(signupRequest: SignupRequestDto): Promise<ProfileEntity>;

  save(updatedProfile: ProfileEntity): Promise<ProfileEntity>;
}

export const PROFILE_REPOSITORY = Symbol('PROFILE_REPOSITORY');
