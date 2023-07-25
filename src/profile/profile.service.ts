import IProfileService from './interfaces/profile.service.intreface';
import { ProfileResponseDto } from './dto/profile.response.dto';
import {
  BadRequestException,
  Inject,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import IProfileRepository, {
  PROFILE_REPOSITORY,
} from './interfaces/profile.repository.interface';
import { SignupRequestDto } from './dto/signup.request.dto';
import { UpdateProfileRequest } from './dto/update.profile.request';

export default class ProfileService implements IProfileService {
  constructor(
    @Inject(PROFILE_REPOSITORY)
    private profileRepository: IProfileRepository,
  ) {}

  async findByLogin(login: string): Promise<ProfileResponseDto> {
    const profile = await this.profileRepository.findByLogin(login);
    if (!login) {
      throw new NotFoundException('Profile not found');
    }

    return profile;
  }

  async findByLoginOrEmail(loginOrEmail: string): Promise<ProfileResponseDto> {
    const profile = await this.profileRepository.findByLoginOrEmail(
      loginOrEmail,
    );

    if (!profile) {
      throw new UnauthorizedException('Invalid email or login');
    }

    return profile;
  }

  async create(createUserReq: SignupRequestDto): Promise<ProfileResponseDto> {
    const { login, email } = createUserReq;
    const [profileWithLogin, profileWithEmail] = await Promise.all([
      this.profileRepository.findByLogin(login),
      this.profileRepository.findByLoginOrEmail(email),
    ]);
    if (profileWithEmail) {
      throw new BadRequestException(
        `There is already user with email ${email}`,
      );
    }
    if (profileWithLogin) {
      throw new BadRequestException(
        `There is already user with login ${login}`,
      );
    }
    return this.profileRepository.create(createUserReq);
  }

  async update(
    id: number,
    updateProfileRequest: UpdateProfileRequest,
  ): Promise<void> {
    const profile = await this.profileRepository.findById(id);
    if (!profile) {
      throw new NotFoundException(`There is no profile with id ${id}`);
    }
    Object.assign(profile, updateProfileRequest);
    await this.profileRepository.save(profile);
  }
}
