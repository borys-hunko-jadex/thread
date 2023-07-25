import IProfileRepository from './interfaces/profile.repository.interface';
import { SignupRequestDto } from './dto/signup.request.dto';
import { ProfileEntity } from './profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ProfileRepository implements IProfileRepository {
  constructor(
    @InjectRepository(ProfileEntity)
    private repository: Repository<ProfileEntity>,
  ) {}

  findById(id: number): Promise<ProfileEntity> {
    return this.repository.findOneBy({ id });
  }

  create(signupRequest: SignupRequestDto): Promise<ProfileEntity> {
    const profile = this.repository.create(signupRequest);
    return this.repository.save(profile);
  }

  findByLogin(login: string): Promise<ProfileEntity> {
    return this.repository.findOne({
      where: { login },
    });
  }

  findByLoginOrEmail(loginOrEmail: string): Promise<ProfileEntity> {
    return this.repository.findOne({
      where: [{ login: loginOrEmail }, { email: loginOrEmail }],
    });
  }

  async save(updatedProfile: ProfileEntity): Promise<ProfileEntity> {
    return await this.repository.save(updatedProfile);
  }
}
